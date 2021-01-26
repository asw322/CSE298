<template>
  <div>
    <!-- https://vuejsexamples.com/a-simple-and-highly-customized-menu-solution-for-vue2/ -->

    <!-- <el-tag>Tag 1</el-tag>
    <el-tag type="success">Tag 2</el-tag>
    <el-tag type="info">Tag 3</el-tag>
    <el-tag type="warning">Tag 4</el-tag>
    <el-tag type="danger">Tag 5</el-tag>

    <el-tag>Default</el-tag>
    <el-tag size="medium">Medium</el-tag>
    <el-tag size="small">Small</el-tag>
    <el-tag size="mini">Mini</el-tag>

    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{tag.name}}
    </el-tag> -->

    <el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TagsDataService from '../services/TagsDataService';


// Setting up TagsDataService
interface Tag {
  // set up data fields
  uid: string, 
  tag: string
}

@Component({
  // Empty
})

@Component
export default class Tags extends Vue {
  private tags: Tag[] = [];
  private inputValue = '';
  private formError: string = '';

  // SAMPLE DATABASE FOR EL-TAGS (will transition to Heroku now)
  private dynamicTags = ['Tag 1', 'Tag 2', 'Tag 3'  ];
  private inputVisible = false;
  

  // SAMPLE DATABASE FOR V-SELECTMENU 


  /*
   * METHODS FOR TAGS
   */

  hello() {
    console.log("hello world");
  }

  // current() {
  //   TagsDataService.getAll()
  //   .then(response => {
  //     console.log("[Tags Retreival]");
  //     console.log(response.data)
  //     this.tags = response.data.reverse();
  //   })
  //   .catch(err => {
  //     console.error(`Couldn't fetch all posts: ${err}`)
  //   })
  // }

  public getAllTags() {
    TagsDataService.getAll()
      .then(response => {
        console.log(response)
        this.dynamicTags = response.data;
      })
      .catch(err => {
        console.log(err);
      })
  }


  
  public handleClose(tag) {
    this.getAllTags();
    // PUT REQUEST DB
    // DELETE THE USE COOKIES FOR THAT TAGS
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
  }
  public showInput() {
    this.inputVisible = true;
    this.$nextTick(() => {
      this.$refs.saveTagInput.$refs.input.focus();
    });
  }

  // Handles adding a new tag
  public handleInputConfirm() {
    let inputValue = this.inputValue;
    if(inputValue) {
      this.dynamicTags.push(inputValue);
    }
    this.inputVisible = false;
    this.inputValue = '';
  }


  // METHODS FOR TAGSDATASERVICE
  // created() {

  // }
//   public tags_addNewTagByUID() {
//     const newTag: Tag = {
//       uid: "U1",  // Need to modify this to the user's UID
//       tag: this.inputValue
//     }

//     TagsDataService.addNewTagByUID(newTag)
//       .then(response => {
//         this.tags.unshift(response.data);
//       })
//       .catch(err => {
//         this.formError = err.response.statusText;
//       })
//   }
//   public tags_deleteTagByUID() {

//   }

}
</script>


<style scoped>
  textarea.form-control {
    height: 100px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<template>
  <div>

    <!-- https://vuejsexamples.com/a-simple-and-highly-customized-menu-solution-for-vue2/ -->
    <!-- <p1>SIMPLE HELLO TAGS</p1> -->
    <br>

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
// import Element, { Tag, Button, Input } from 'element-ui';

// Vue.use(Element, Tag, Button, Input);

@Component({
  // components: {
  //   Element
  // }
})
export default class Tags extends Vue {
  // data() {
  //   return {
  //     tags: [
  //       {name: 'Tag 10', type: ''},
  //       {name: 'Tag 11', type: ''},
  //       {name: 'Tag 12', type: ''}
  //     ]
  //   };
  // }
  private dynamicTags = ['Tag 1', 'Tag 2', 'Tag 3'];
  private inputVisible = false;
  private inputValue = '';

  public handleClose(tag) {
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
  public handleInputConfirm() {
    let inputValue = this.inputValue;
    if(inputValue) {
      this.dynamicTags.push(inputValue);
    }
    this.inputVisible = false;
    this.inputValue = '';
  }
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

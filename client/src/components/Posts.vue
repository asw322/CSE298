<template>
  <div>
    <div>
      <textarea class="form-control" v-model="formInput" @keyup="formError = ''"></textarea>
      <button type="button" class="btn btn-primary mt-3" @click="addPost">Add Post</button>
      <div class="post-form-error" v-if="formError">{{formError}}, probably should fill the form</div>
    </div>
    <div>
      <div v-for="(post, index) in posts" :key="index">
        



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






        <div class="card my-5 animate__animated animate__fadeInDown">
          <div class="card-header">
            {{post.date}}
          </div>
          <div class="card-body">
            <p class="card-text">{{post.text}}</p>
            <div>
              <button type="button" class="btn btn-danger" @click="deletePost(post.id)">Delete Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostsDataService from '../services/PostsDataService';
import Tags from './Tags.vue';

interface Post {
  uid: string,
  id?: number,  //post id
  text: string,
  date?: string
};

interface Tag {
  pid: string, 
  tag: string
}

@Component({
  components: {
    Tags
  }
})
export default class Posts extends Vue {
  private posts: Post[] = [];
  private tags: Tag[] = [];
  private inputValue = '';
  private dynamicTags= ['Tag 1', 'Tag 2', 'Tag 3'];
  private inputVisible= false;
  private selecteduserid = 'U2';
  

  private formInput: string = '';
  private formError: string = '';

  created() {
    // Get all the posts
    PostsDataService.getAll()
      .then(response => {
        console.log("[Get Post]")
        // console.log(response.data)
        response.data.reverse();

        for (let obj of response.data) {
            let myObj = {
                uid: this.selecteduserid,
                id: obj.pid,    // id = id of the post
                text: obj.message,
                date: '',
                tag: obj.tag
            }

            // Get all the tags that belong to obj.pid
            // PostsDataService.getAllTagsWithPid(obj.pid)
            //   .then(response => {

            //   })
            //   .catch(err => {
            //     console.error(err.message);
            //   })

            this.posts.push(myObj);
        }
        console.log(this.posts);

      })
      .catch(err => {
        console.error(`Couldn't fetch all posts: ${err}`)
      })
  }


  public addPost(): void {
    console.log("ADD POST FROM POSTS");
    const newPost: Post = {
      uid: this.selecteduserid,
      text: this.formInput
    }

    PostsDataService.create(newPost)
      .then(response => {
        this.posts.unshift(response.data);
        console.log("[Add Post]")
      })
      .catch(err => {
        this.formError = err.reponse.statusText;
      })
  }

  public deletePost(id: number): void {
    PostsDataService.delete(id)
      .then(response => {
        let newPosts = this.posts.filter(post => post.id !== response.data[0].id);
        this.posts = newPosts;
      })
      .catch(err => {
        console.error(err.response);
      })
  }
  
  //TAG RELATED STUFF
  public handleClose(id: number, tag: string) {
    //This still connects to the database
    // PostsDataService.closeTag(id, tag)
    //   .then(response => {
    //     // On success, remove that tag from the tags
    //     this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);    
    //   })
    //   .catch(err => {
    //     console.error(err.message);
    //   });
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
  }



}
</script>

<style scoped>
textarea.form-control {
  height: 100px;
}
</style>

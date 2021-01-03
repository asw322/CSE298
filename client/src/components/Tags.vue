// not working stuff copied from posts.vue 

<template>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostsDataService from '../services/PostsDataService';


@Component
export default class Tags extends Vue {
  private posts: Post[] = [];
}
</script>

<style scoped>
textarea.form-control {
  height: 100px;
}
</style>

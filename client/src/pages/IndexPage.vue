<template>
  <div class="page page--index">
    
    <div class="alert alert-success" role="alert">
      Congrats! It looks like you got the app up & running.
    </div>
    <h3 class="mt-2">Welcome</h3>
    <p>This will be the project that you will build off of during this course.</p>
    <p>It's not super pretty right now, but mostly what we did was set up a lot of the foundation for you to build off of.</p>

    <div class="list-group">
      <a class="list-group-item list-group-item-action active" aria-current="true">
        Sprint Scheduele
      </a>
      <router-link class="list-group-item list-group-item-action" to="/sprint0">Sprint 0 [DONE]</router-link>
      <router-link class="list-group-item list-group-item-action" to="/sprint1">Sprint 1 [DONE]</router-link>
      <router-link class="list-group-item list-group-item-action" to="/sprint2">Sprint 2 [DONE]</router-link>
      <router-link class="list-group-item list-group-item-action" to="/sprint3">Sprint 3 [DONE]</router-link>
      
    </div>
    <tags_list></tags_list>
    <tags></tags>
    <!-- <p1 v-bind:placeholder="hello()" required>Hello World</p1> -->
    <h3>Messages Page</h3>
    <simple> </simple>
    <posts></posts>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Tags from '../components/Tags.vue';
import Tags_list from '../components/Tags_list.vue';
import Weather from '../components/Weather.vue';
import Posts from '../components/Posts.vue';
import simple from '../components/simple.vue';

@Component({
  components: {
    Tags,
    Tags_list,
    Weather,
    Posts,
    simple
  }
})
export default class IndexPage extends Vue {
}
</script>

<style scoped>
  .about-logo a {
    padding: 20px;
    outline: 1px solid rgb(169, 169, 169);
    display: inline-block;
  }
  .about-logo a:hover {
    opacity: 0.8;
  }
</style>

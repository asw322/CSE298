<template>
  <div class="page page--about">
    <div class="alert alert-danger" role="alert">
      This part will be done by you!
    </div>
    <h1>{{ title }}</h1>
    <div class="btn-group" role="group" aria-label="Basic example">
      <a v-bind:href="rubricLink" target="_blank" class="btn btn-primary">Rubric</a>
      <a v-bind:href="slackLink" target="_blank" class="btn btn-primary">Slack</a>
      <a v-bind:href="descLink" target="_blank" class="btn btn-primary">Project Description</a>
      <a v-bind:href="coursesiteLink" target="_blank" class="btn btn-primary">Coursesite</a>
    </div>
    <p class="mt-3">{{ description }}</p>
    <!-- <script src="//unpkg.com/element-ui@2.14.1/lib/index.js"></script> -->
    <tags_list></tags_list>
    <tags></tags>
    <weather></weather>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tags from '../components/Tags.vue';
import Tags_list from '../components/Tags_list.vue';
import Weather from '../components/Weather.vue';


@Component({
  components: {
    Tags,
    Tags_list,
    Weather
  }
})
export default class Sprint1Page extends Vue {
  private title: string = 'Sprint Two: Working better with your teammates.';
  private description: string = 'This sprint is about working with your teammates. This will involve the backend implementing the singleton design pattern into the API call logic of the app. This will also involve developing a team-wide strategy for how you are going to cache local data - leveraging localstorage and cookies. The backend will need to make a request to an external API, transform the data and then create an endpoint that the frontend can call.';

  private rubricLink: string = 'https://docs.google.com/document/d/1Qi0mLd4HHjZMbRWRkb1ZPnmVwi6DQGEoMSF7_kbbkXw/edit?usp=sharing';
  private slackLink: string = 'https://app.slack.com/client/T01HDFMDT0T/C01GYGDP3JT';
  private descLink: string = 'https://docs.google.com/document/d/1igm6ORVncy5TLJkQsHFqOr72ojPIQ7bRpjF-H4ss0GY/edit?usp=sharing';
  private coursesiteLink: string = 'https://coursesite.lehigh.edu/course/view.php?id=195061';
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

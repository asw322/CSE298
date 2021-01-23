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
    <googleLoginComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GoogleLoginComponent from '../components/GoogleLogin.vue';

@Component({
  components: {
    GoogleLoginComponent
  }
})
export default class Sprint1Page extends Vue {
  private title: string = 'Sprint Three: Working with your users.';
  private description: string = 'The final sprint is about adding the details needed to meet your users needs. This includes adding authentication, and implementing an authorization rule. It also includes integrating a cloud-computing service to implement additional app functionality. Finally, you will publish your project publicly using a hosting service.';

  private rubricLink: string = 'https://docs.google.com/document/d/1tmB0vWYyzrfBP0OmJcrpvNmTSm6az5x_mA3LnijLUjo/edit?usp=sharing';
  private slackLink: string = 'https://app.slack.com/client/T01HDFMDT0T/C01GYGE27M5';
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

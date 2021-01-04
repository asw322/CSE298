<template>
  <div class="page page--index">
    <div class="alert alert-primary" role="alert">
      This messaging code covers concepts regarding frontend vs. backend that you are highly encouraged to use to help you with your sprints.
    </div>
    <h3>Messages Page</h3>
    <p>{{ welcome }}</p>
    <posts></posts>
    <!-- <tags><tags> -->
    <!-- <vote> <vote> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Posts from '../components/Posts.vue'
// import Tags from '../components/Tags.vue'
// import Vote from '../components/Vote.vue'
@Component({
  components: {
    Posts
    // Vote
    // Tags
  }
})
export default class MessagesPage extends Vue {
  private welcome: string = 'Welcome to messages page!';
}
</script>

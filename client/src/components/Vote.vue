<template>
<!-- https://jsfiddle.net/coligo/txpy7ug4/ -->
  <div id="app">
    <div class="container-fluid">
      <!-- <ul class="list-group">
        <post v-for="comment in comments" :post="comment"></post>
      </ul> -->

      <div id="comment-box">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Enter a comment..."
            v-model="comment"
            @keyup.enter="postComment"
          />
          <span class="input-group-btn">
            <button class="btn btn-primary" type="button" @click="postComment">
              Submit
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang = "ts">
Vue.component('post', {
  template: "#post-template",
  props: ['post'],
  data: function () {
    return {
      upvoted: false,
      downvoted: false
    };
  },
  methods: {
    upvote: function () {
      this.upvoted = !this.upvoted;
      this.downvoted = false;
    },
    downvote: function () {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
    }
  },
  computed: {
    votes: function () {
      if (this.upvoted) {
        return this.post.votes + 1;
      } else if (this.downvoted) {
        return this.post.votes - 1;
      } else {
        return this.post.votes;
      }
    }
  }
});

var vm = new Vue({
  el: "#app",
  data: {
    posts: [{
				title: "A post for our reddit demo starting at 15 votes",
				votes: 15
			},
			{
				title: "Try out the upvoting, it works, I promise",
				votes: 53
			},
			{
				title: "coligo is the bomb!",
				votes: 10
			}]
  }
});
</script>


<style scoped>
a {
  padding-left: 5px;
}

.disabled {
  color: orange;
}

/* some simple transitions to make the upvote and downvote
buttons fade in as a visual cue for the user */

.glyphicon {
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
}

.glyphicon:hover {
  opacity: 0.75;
  cursor: pointer;
}
</style> 
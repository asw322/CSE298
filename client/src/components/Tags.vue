<template>
  <v-selectmenu :data="list" class="form-control" v-model="value">
  </v-selectmenu>
  <!-- Source website -->
  <!-- https://vuejsexamples.com/a-simple-and-highly-customized-menu-solution-for-vue2/ -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
   data(){
      return {
          value: '',
          list: [
            {id:1 ,name:'Chicago Bulls',desc:'yummy'},
            {id:2 ,name:'Cleveland Cavaliers',desc:'fruits'}
          ]
      }
  }
}
</script>


<style scoped>
textarea.form-control {
  height: 100px;
}
</style>

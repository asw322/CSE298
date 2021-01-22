<template>
  <v-selectmenu :data="list" class="form-control" v-model="value">
  </v-selectmenu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
   data(){
      return {
          value: '',
          list: [
            {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
            {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'}
          ]
      };
  };  
};
</script>



<style scoped>
textarea.form-control {
  height: 100px;
}
</style>

<template>
  <v-selectmenu :data="list" class="form-control" v-model="value">
  </v-selectmenu>
</template>

<script lang="ts">
import Vue from 'vue'
import vSelectMenu from 'v-selectmenu';
Vue.use(vSelectMenu, { global config options... });

@Component
export default class Tags extends Vue {
   data(){
      return {
          value: '',
          list: [
            {id:1 ,name:'Chicago Bulls',desc:'芝加哥公牛'},
            {id:2 ,name:'Cleveland Cavaliers',desc:'克里夫兰骑士'},
            {...}
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

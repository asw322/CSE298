<template>
    <div>
        <p1>hello from tags list</p1>
        <v-selectmenu :data="list" class="form-control" v-model="value">SAMPLE TEXT</v-selectmenu>
        <!-- https://vuejsexamples.com/a-simple-and-highly-customized-menu-solution-for-vue2/ -->
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TagsDataService from '../services/TagsDataService';

@Component
export default class Tags_list extends Vue {
    
}

</script>
<style scoped>

</style>
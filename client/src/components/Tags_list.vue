<template>
    <div>
        
        <v-selectmenu :data="list"
                    :embed="true"
                    :multiple="true"
                    :width="250"
                    key-field="id"
                    v-model="inputValue" >
        <template #row="{ row }">{{row.name}} {{row.desc}}</template>
      </v-selectmenu>
        <!-- https://vuejsexamples.com/a-simple-and-highly-customized-menu-solution-for-vue2/ -->
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TagsDataService from '../services/TagsDataService';

interface TagObj {
    id: number,
    name: string,
    desc: string
}

@Component
export default class Tags_list extends Vue {

    @Prop(String) readonly uid: string;
    @Prop() readonly list;

    private inputValue = '';
}

</script>
<style scoped>

</style>
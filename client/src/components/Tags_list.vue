<template>
    <div>
        <!-- <v-selectmenu :data="list" class="form-control" v-model="value">Subscribed Tags</v-selectmenu> -->
        <v-selectmenu :data="list"
                    :embed="true"
                    :multiple="true"
                    :width="250"
                    key-field="id"
                    v-model="value2" >
        <template #row="{ row }">
          {{row.name}} {{row.desc}}
        </template>
      </v-selectmenu>
        <!-- https://vuejsexamples.com/a-simple-and-highly-customized-menu-solution-for-vue2/ -->
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TagsDataService from '../services/TagsDataService';

@Component
export default class Tags_list extends Vue {
    private list = [
        {
            id: 1,
            name: 'r/funny',
            desc: '- for funny things'
        },
        {
            id: 2, 
            name: 'r/meme',
            desc: '- for meme things'
        }
    ];
}

</script>
<style scoped>

</style>
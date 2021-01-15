<template>
    <div>
        
        <v-selectmenu :data="unprocessed_list"
                    :embed="true"
                    :multiple="true"
                    :width="250"
                    key-field="id"
                    v-model="inputValue" >
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

interface TagObj {
    id: number,
    name: string,
    desc: string
}

@Component
export default class Tags_list extends Vue {
    private refrence_list = [
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

    private unprocessed_list = [];
    
    private inputValue = '';

    //Collect all data from tags on backend
    created() {
        TagsDataService.getAll()
            .then(response => {
                console.log("[Tags Retreival]");
                console.log(response.data);
                
                
                for (let obj of response.data) {
                    let myObj = {
                        name: obj.tag,
                        desc: ''
                    }

                    this.unprocessed_list.push(myObj);
                }
            })
            .catch(err => {
                console.error(`Couldn't fetch all posts: ${err}`)
            });
    }
}

</script>
<style scoped>

</style>
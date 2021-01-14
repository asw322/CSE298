import https from './http-common';
import Tag from '../components/Tags.vue';      // Not sure why this is giving an error!


/**
 * Alternative option if addNewTagByUID(_tag: Tag) does not work
 * We can create a new Tag interface just like in Tags.vue so we can 
 * pass in the parameter _tag: Tag
 */



class TagsDataService {
    /**
     * Functions that we want available to the user: 
     * 1. Get all tags that the user has subscribed to
     * 2. Add a new tag for the user
     * 3. Delete an existing tag belonging to the user 
     */


    // 1. Get all tags that the user has subscribed to 
    getAllByUID(id: string) {
        return https.get(`/tags/${id}`);
    }
    
    // 2. Add a new tag for the user
    // addNewTagByUID(id: string, tag: any) {
    //     return https.post(`/tags/${id}`, tag);      // Should this be post or put? 
    // }




    // This is the new generalized version (HAVE NOT TESTED YET)
    addNewTagByUID(_tag: Tag) {
        return https.post(`/tags/${_tag.uid}`, _tag.tag);      // Should this be post or put? 
    }

    // 3. Delete an existing tag belonging to the user
    deleteTagByUID(id: string, tag: any) {
        return https.delete(`/tags/${id}`, tag);
    }
}

export default new TagsDataService();
<template>
    <div>
        <!-- <p1>Variable: {{test}}</p1> -->
        <!-- <googleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></googleLogin> -->
        <!-- <button @keypress="handleClickGetAuth" :disabled="!isInit">get auth code</button> -->
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import GoogleLogin from 'vue-google-login';

@Component({
    // External components imported
    components: {
        // GoogleLogin
    }
})
export default class GoogleLogin extends Vue {
    private test: string = "test";
    private isInit: boolean = false;
    private isSignIn: boolean = false;

    // Copied and reformatted from npmjs website
    // public handleClickGetAuth() {
    //     this.$gAuth.getAuthCode()
    //         .then(authCode => {
    //             // make backend HTTP request GET call to the heroku database
    //         })
    //         .then(response => {
    //             // And then 
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }



    // private params = {
    //     client_id: "xxxxxx" 
    // }
    // private renderParams = {
    //     width: 250,
    //     height: 50, 
    //     longtitle: true
    // };

    // googleUser is the objet returned by google
    // public onSuccess(googleUser) {
    //     console.log(googleUser);

    //     console.log(googleUser.getBasicProfile());
    // }

    // public onFailure() {
    //     console.log("Login failed");
    // }
}
</script>
<style scoped>

</style>
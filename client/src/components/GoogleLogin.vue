<template>
    <div>
        <button @click="login">Sign In with Google</button>
        <!-- <a href="/api/google_api/google">Sign In with Google</a> -->
        <!-- <p1>Variable: {{test}}</p1> -->
        <!-- <googleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></googleLogin> -->
        <!-- <button @keypress="handleClickGetAuth" :disabled="!isInit">get auth code</button> -->
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import GoogleLogin from 'vue-google-login';
import GoogleDataService from '../services/GoogleDataService'; 

@Component({
    // External components imported
    components: {
        // Empty
    }
})
export default class GoogleLogin extends Vue {
    private test: string = "test";
    private isInit: boolean = false;
    private isSignIn: boolean = false;
    private formError: string = "";

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

    public login() {
        console.log("login from google login vue");

        GoogleDataService.getUserInfo()
            .then(response => {
                console.log("from google login vue" + response);
            })
            .catch(err => {
                this.formError = err.response.statusText;
            })
    }
}
</script>
<style scoped>

</style>
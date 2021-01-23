<template>
    <div>
        <h1>Login with Facebook</h1>

        <!-- the appId needs to be changed to one of our appId -->
        <!-- therefore, someone needs to make a developer account with facebook to get their own appId -->
        <!-- then grant access for us to use it -->
        <!-- currently: it hangs when you login into facebook -->
        <facebook-login class="button"
            appId="326022817735322"
            @login="onLogin"
            @logout="onLogout"
            @sdk-loaded="sdkLoaded">
        </facebook-login>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import facebookLogin from 'facebook-login-vuejs';

@Component({
    components: {
        facebookLogin
    }
})
export default class FacebookLogin extends Vue {
    private personalID;
    private email;
    private name;
    private isConnected;

    public getUserData() {
        this.FB.api('/me', 'GET', {fields: 'id,name,email' },
            userInformation => {
                console.warn("get data from fb", userInformation);
                this.personalID = userInformation.id;
                this.email = userInformation.email;
                this.name = userInformation.name;
                // We can add more parameters if we want 
            }
        )
    }

    public sdkLoaded(payload) {
        this.isConnected = payload.isConnected;
        this.FB = payload.FB;
        if (this.isConnected) this.getUserData();
    }

    public onLogin() {
        this.isConnected = true;
        this.getUserData();
    }

    public onLogout() {
        this.isConnected = false;
    }
}
</script>
<style scoped>

</style>
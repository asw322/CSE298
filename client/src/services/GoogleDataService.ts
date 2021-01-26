import https from './http-common';

class GoogleDataService {

    // This is being used to grab user information instead of an AJAX network request to login to google
    getUserInfo() {
        console.log("google data service getUserInfo");
        return https.get('/google_api/getGoogleInfo');
    }

    
}

export default new GoogleDataService();
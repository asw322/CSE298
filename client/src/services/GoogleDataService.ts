import https from './http-common';

class GoogleDataService {
    getUserInfo() {
        console.log("google data service getUserInfo");
        return https.get('/google_api/google');
    }
}

export default new GoogleDataService();
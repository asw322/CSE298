import https from './http-common';

class GoogleDataService {
    getUserInfo() {
        return https.get('/google_api/google');
    }
}

export default new GoogleDataService();
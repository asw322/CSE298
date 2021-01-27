import https from './http-common';

class LocationDataService {

  get(id: number) {
    return https.get(`/location_api/location/${id}`);
  }

  update(data: any) {
    return https.put(`/location_api/location/putlocation`, data);
  }

  delete(id: number) {
    return https.delete(`/location_api/location/${id}`);
  }
}

export default new LocationDataService();

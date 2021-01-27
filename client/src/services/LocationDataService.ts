import https from './http-common';

class LocationDataService {

  get(id: number) {
    return https.get(`/location_api/location/${id}`);
  }

  update(id: string, data: any) {
    return https.put(`/location_api/location/${id}`, data);
  }

  delete(id: number) {
    return https.delete(`/location_api/location/${id}`);
  }
}

export default new LocationDataService();

import https from './http-common';

class PostsDataService {
  getAll() {
    return https.get('/post_api/posts');
  }

  get(id: number) {
    return https.get(`/post_api/posts/${id}`);
  }

  create(data: any) {
    return https.post('/post_api/posts', data);
  }

  update(id: string, data: any) {
    return https.put(`/post_api/posts/${id}`, data);
  }

  delete(id: number) {
    return https.delete(`/post_api/posts/${id}`);
  }
}

export default new PostsDataService();

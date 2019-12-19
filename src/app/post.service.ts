import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  urlApi = "http://localhost:5000/posts";

  constructor(private http: HttpClient) { }

  _getPosts() {
    return this.http.get(this.urlApi);
  }

  _persistPost(post: any) {
    return this.http.post(this.urlApi, post);
  }

  _deletePost(id) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }

  _updatePost(post) {
    return this.http.put(`${this.urlApi}/${post.id}`, post);
  }

  _statusPost(id, data) {
    return this.http.patch(`${this.urlApi}/${id}`, data);
  }

 
}

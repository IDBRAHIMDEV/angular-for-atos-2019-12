import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  display: boolean = false;
  editable: boolean = false;
  posts: any[] = [];

  post: any = {
    title: '',
    body: ''
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService._getPosts()
                    .subscribe((res: any[]) => {
                      this.posts = res;
                    })
  }

  savePost(form) {
    
    if(form.invalid) {
      alert('please check your form !');
      return;
    }
    
    this.postService._persistPost(this.post)
        .subscribe(res => {
          this.posts = [res, ...this.posts];
          this.post = {
            title: '',
            body: ''
          }

          this.display = false;
        })
  }

  displayForm() {
    this.display = !this.display;
  }

  deletePost(id) {
    this.postService._deletePost(id)
        .subscribe(
          () => {
            this.posts = this.posts.filter(post => post.id !== id)
          },
          (err) => console.error(err)
        )
  }

  editPost(post) {
    this.editable = true;
    this.post = post;
    this.display = true;
  }

  updatePost() {
    this.postService._updatePost(this.post)
        .subscribe(() => {
          this.initPost();
        })
  }

  initPost() {
    this.post = {
      title: '',
      body: ''
    }
    this.display = false;
    this.editable = false;
  }

  statusPost(post) {
    
    let myPost = {
      active: !post.active
    }

    this.postService._statusPost(post.id, myPost)
        .subscribe(res => {
          post.active = myPost.active;
        })
  }

  info(data) {
    console.log(data);
  }

}

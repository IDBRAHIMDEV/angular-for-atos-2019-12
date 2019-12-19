import { Post } from './../models/post';
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
  like: number = 0;
  disLike: number = 0;
  posts: Post[] = [];
  postsResult: Post[] = [];

  post: Post = {
    title: '',
    body: '',
    vote:{
      like: 0,
      disLike: 0
    }
  }

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService._getPosts()
                    .subscribe((res: Post[]) => {
                      this.postsResult = this.posts = res;
                    })
  }

  savePost(form) {
    
    if(form.invalid) {
      alert('please check your form !');
      return;
    }
    
    this.postService._persistPost(this.post)
        .subscribe((res: Post) => {
          this.postsResult = this.posts = [res, ...this.posts];
         this.initPost();
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

  editPost(post: Post) {
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
      body: '',
      vote: {
        like: 0,
        disLike: 0
      }
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

  searchPosts(data: string) {
    
    this.postsResult = this.posts.filter(post => post.title.toLowerCase().includes(data.toLowerCase()) || post.body.toLowerCase().includes(data.toLowerCase()))
  }

  incLike(post: Post) {
  
    this.postService._statusPost(post.id, post)
        .subscribe(() => {})
  }

  incDisLike(post: Post) {
    
    this.postService._statusPost(post.id, post)
        .subscribe(() => {})
  }

  incVote(data, post) {
      
      if(data.status == 'like') {
        post.vote.like = data.value;
        this.incLike(post);
      }else {
        post.vote.disLike = data.value;
        this.incDisLike(post);
      }

      
  }

}

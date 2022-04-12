import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = { id: 0, title: '', body: '' };
  isEdit: boolean = false;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatePost(post: Post) {
    this.posts.forEach((p, index) => {
      if (p.id === post.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
      }
    });
  }

  removePost(post: Post) {
    if (confirm('Are you sure?')) {
      this.postService.deletePost(post.id).subscribe(() => {
        this.posts.forEach((p, index) => {
          if (p.id === post.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}

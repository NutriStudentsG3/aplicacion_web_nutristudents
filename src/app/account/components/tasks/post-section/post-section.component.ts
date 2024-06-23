import { Component, Input, OnInit } from '@angular/core';
import { Post, Comment } from '../../../../community/models/posts.model';
import { CommunityService } from './../../../../community/services/community.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']  // Corrected the styleUrls property name
})
export class PostSectionComponent implements OnInit {
  posts: Post[] = [];
  username: string | undefined;

  constructor(private postService: CommunityService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.username = params.get('id')!;
      if (this.username) {
        this.loadPosts();
      }
    });
    
  }

  loadPosts(): void {
    this.posts = this.postService.findPostsByUsername(this.username!);
    console.log(this.posts);
  }

  likePost(post: Post): void {
    post.likes++;
  }

  toggleComments(post: Post): void {
    post.showComments = !post.showComments;
  }

  adjustTextAreaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset height to recalculate
    textarea.style.height = `${textarea.scrollHeight}px`; // Set new height based on content
  }

  addComment(post: Post): void {
    if (post.newComment?.trim()) {
      const newComment: Comment = {
        content: post.newComment,
        username: 'Current User', // Replace with actual current user from authentication
        shortUsername: '@currentUser', // Short username or identifier of current user
        timestamp: new Date().toISOString()
      };
      post.comments.push(newComment);
      post.newComment = '';
    }
  }
}

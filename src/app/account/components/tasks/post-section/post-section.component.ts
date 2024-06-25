import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post, Comment } from '../../../../community/models/posts.model';
import { CommunityService } from './../../../../community/services/community.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSubscription: Subscription | undefined;

  constructor(private postService: CommunityService) {}

  ngOnInit(): void {
    // Suscribirse a los cambios en los posts creados por el usuario
    this.postsSubscription = this.postService.userPosts$.subscribe(userPosts => {
      this.posts = userPosts;
    });
  }

  ngOnDestroy(): void {
    // Desuscribirse para evitar fugas de memoria
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
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

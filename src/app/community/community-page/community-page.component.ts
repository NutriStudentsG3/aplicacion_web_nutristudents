import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../account/services/user.store.service';
import { User } from '../../account/models/user.model';
import { Post, Comment } from '../models/posts.model';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent implements OnInit {
  newPostContent: string = '';
  selectedImage: File | null = null;
  imagePreviewUrl: string | ArrayBuffer | null = null;
  isModalVisible: boolean = false;
  showMostViewedPost: boolean = false;
  mostViewedPost: Post | null = null;
  currentUser: User | undefined;
  errorMessage: string | null = null;

  posts: Post[] = [];

  constructor(private userStore: UserStoreService, private communityService: CommunityService) {}

  ngOnInit(): void {
    this.userStore.user$.subscribe(user => {
      this.currentUser = user;
    });
    this.posts = this.communityService.getAllPosts();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedImage = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  createPost(): void {
    this.errorMessage = null;
    if (!this.currentUser) {
      this.errorMessage = 'No user is currently logged in.';
      return;
    }
    if (this.newPostContent.trim()) {
      const newPost: Post = {
        content: this.newPostContent,
        imageUrl: this.imagePreviewUrl as string,
        likes: 0,
        comments: [],
        username: `${this.currentUser.firstname} ${this.currentUser.lastname}`,
        shortUsername: `@${this.currentUser.username}`,
        timestamp: this.getCurrentTimestamp()
      };
      this.communityService.addPost(newPost);
      this.posts = this.communityService.getAllPosts(); // Update the local posts array
      this.newPostContent = '';
      this.selectedImage = null;
      this.imagePreviewUrl = null;
    } else {
      this.errorMessage = 'Post content cannot be empty.';
    }
  }

  likePost(post: Post): void {
    post.likes++;
  }

  toggleComments(post: Post): void {
    post.showComments = !post.showComments;
  }

  addComment(post: Post): void {
    if (post.newComment?.trim() && this.currentUser) {
      const newComment: Comment = {
        content: post.newComment,
        username: `${this.currentUser.firstname} ${this.currentUser.lastname}`,
        shortUsername: `@${this.currentUser.username}`,
        timestamp: this.getCurrentTimestamp()
      };
      post.comments.push(newComment);
      post.newComment = '';
    }
  }

  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }

  adjustTextAreaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  getCurrentTimestamp(): string {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const hour = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hour >= 12 ? 'pm' : 'am';
    return `${day} ${month} ${hour}:${minutes}${period}`;
  }
}

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { Post } from '../models/posts.model';
import { Comment } from '../models/posts.model';
import { CommunityService } from '../services/community.service';


@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent {
  newPostContent: string = '';
  selectedImage: File | null = null;
  imagePreviewUrl: string | ArrayBuffer | null = null;
  isModalVisible: boolean = false;
  showMostViewedPost: boolean = false; // Controla si mostrar el post más visto
  mostViewedPost: Post | null = null; // Almacena el post más visto

  posts: Post[] 

  constructor(private postService : CommunityService) {
    this.posts = this.postService.getAllPosts();
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
    if (this.newPostContent.trim()) {
      const newPost: Post = {
        content: this.newPostContent,
        imageUrl: this.imagePreviewUrl as string,
        likes: 0,
        comments: [],
        username: 'Usuario Actual', // Aquí deberías obtener el nombre de usuario actual desde tu sistema de autenticación
        shortUsername: '@userActual', // Aquí el nombre corto o identificador del usuario actual
        timestamp: this.getCurrentTimestamp()
      };
      this.posts.unshift(newPost);
      this.newPostContent = '';
      this.selectedImage = null;
      this.imagePreviewUrl = null;
    }
  }

  likePost(post: Post): void {
    post.likes++;
  }

  toggleComments(post: Post): void {
    post.showComments = !post.showComments;
  }

  addComment(post: Post): void {
    if (post.newComment?.trim()) {
      const newComment: Comment = {
        content: post.newComment,
        username: 'Usuario Actual', // Obtener usuario actual desde autenticación
        shortUsername: '@userActual', // Nombre corto o identificador de usuario actual
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
    textarea.style.height = 'auto'; // Reinicia la altura para recalcular
    textarea.style.height = `${textarea.scrollHeight}px`; // Establece la nueva altura basada en el contenido
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
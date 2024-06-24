import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserStoreService } from '../../account/services/user.store.service';
import { User } from '../../account/models/user.model';

interface Comment {
  content: string;
  username: string;       // Nombre completo del usuario
  shortUsername: string;  // Nombre corto del usuario
  timestamp: string;      // Fecha de publicación del comentario
}

interface Post {
  content: string;
  imageUrl?: string;
  likes: number;
  comments: Comment[];
  newComment?: string;
  showComments?: boolean;
  username: string;       // Nombre completo del usuario
  shortUsername: string;  // Nombre corto del usuario
  timestamp: string;      // Fecha de publicación
}

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
  showMostViewedPost: boolean = false;
  mostViewedPost: Post | null = null;
  currentUser: User | undefined;
  errorMessage: string | null = null;

  posts: Post[] = [
    { 
      content: 'Buenos días comunidad. Hoy les quiero presentar una rica receta que he preparado para los amantes de la comida alta en proteína. Es muy rápida y accesible. Deben probarlo', 
      imageUrl: '/images/post1.jpg', 
      likes: 150, 
      comments: [
        { content: '¡Se ve deliciosa! Gracias por compartir.', username: 'Rosa Rodriguez', shortUsername: '@RRodriguez', timestamp: '19 Junio 13:55pm' }, 
        { content: '¿Cuánto tiempo tarda en prepararse?', username: 'Lucero Manchay', shortUsername: '@LucManchay', timestamp: '19 Junio 14:00pm' }
      ],
      username: 'Michael Williams',
      shortUsername: '@mike_w',
      timestamp: '19 Junio 13:50pm'
    },
    { 
      content: '¡Hola comunidad! Quiero compartir con ustedes mi cena de hoy después del gimnasio. Es un salteado de tofu con verduras y salsa de soya. Es muy rápido de preparar y está lleno de proteínas y nutrientes que se necesita después de un buen entrenamiento.', 
      imageUrl: '/images/post2.jpg', 
      likes: 20, 
      comments: [
        { content: '¡Excelente opción para después del gimnasio!', username: 'Ilan Nuñez', shortUsername: '@IlanDa', timestamp: '17 Junio 14:35pm' }
      ],
      username: 'Jane Smith',
      shortUsername: '@jane_doe',
      timestamp: '17 Junio 14:30pm'
    },
    { 
      content: '¿Podrían compartirme algunas ideas de desayunos que sean nutritivos y rápidos de hacer? Estoy buscando opciones que me mantengan lleno de energía hasta el almuerzo y que no me tomen mucho tiempo de preparación por las mañanas porque debo ir a la universidad. Agradezco mucho sus sugerencias!', 
      likes: 15, 
      comments: [
        { content: 'Puedes intentar con un batido de frutas y avena.', username: 'Jose Mayhua', shortUsername: '@MiwaJose', timestamp: '18 Junio 10:15am' }, 
        { content: 'Los huevos revueltos con espinacas son rápidos y nutritivos.', username: 'Braulio Bartra', shortUsername: '@brauBartra', timestamp: '18 Junio 10:30am' }
      ],
      username: 'Laura Martinez',
      shortUsername: '@AMastard3rs',
      timestamp: '18 Junio 10:00am'
    }
  ];

  constructor(private userStore: UserStoreService) {
    this.userStore.user$.subscribe(user => {
      this.currentUser = user;
    });
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
      this.posts.unshift(newPost);
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
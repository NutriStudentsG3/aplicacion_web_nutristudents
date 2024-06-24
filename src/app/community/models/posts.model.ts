export interface Comment {
    content: string;
    username: string;       // Nombre completo del usuario
    shortUsername: string;  // Nombre corto del usuario
    timestamp: string;      // Fecha de publicación del comentario
  }
  
  
export interface Post {
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
import { Injectable } from '@angular/core';
import { Post } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  posts: Post[] = [
    { 
      content: 'Buenos días comunidad. Hoy les quiero presentar una rica receta que he preparado para los amantes de la comida alta en proteína. Es muy rápida y accesible. Deben probarlo', 
      imageUrl: '/images/post1.jpg', 
      likes: 150, 
      comments: [
        { content: '¡Se ve deliciosa! Gracias por compartir.', username: 'Rosa Rodriguez', shortUsername: 'RRodriguez', timestamp: '19 Junio 13:55pm' }, 
        { content: '¿Cuánto tiempo tarda en prepararse?', username: 'Lucero Manchay', shortUsername: 'LucManchay', timestamp: '19 Junio 14:00pm' }
      ],
      username: 'Barbara Muñoz',
      shortUsername: 'barbM',
      timestamp: '19 Junio 13:50pm'
    },
    { 
      content: '¡Hola comunidad! Quiero compartir con ustedes mi cena de hoy después del gimnasio. Es un salteado de tofu con verduras y salsa de soya. Es muy rápido de preparar y está lleno de proteínas y nutrientes que se necesita después de un buen entrenamiento.', 
      imageUrl: '/images/post2.jpg', 
      likes: 20, 
      comments: [
        { content: '¡Excelente opción para después del gimnasio!', username: 'Ilan Nuñez', shortUsername: 'IlanDa', timestamp: '17 Junio 14:35pm' }
      ],
      username: 'Pedro Pérez',
      shortUsername: 'pedroP',
      timestamp: '17 Junio 14:30pm'
    },
    { 
      content: '¿Podrían compartirme algunas ideas de desayunos que sean nutritivos y rápidos de hacer? Estoy buscando opciones que me mantengan lleno de energía hasta el almuerzo y que no me tomen mucho tiempo de preparación por las mañanas porque debo ir a la universidad. Agradezco mucho sus sugerencias!', 
      likes: 15, 
      comments: [
        { content: 'Puedes intentar con un batido de frutas y avena.', username: 'Jose Mayhua', shortUsername: 'MiwaJose', timestamp: '18 Junio 10:15am' }, 
        { content: 'Los huevos revueltos con espinacas son rápidos y nutritivos.', username: 'Braulio Bartra', shortUsername: 'brauBartra', timestamp: '18 Junio 10:30am' }
      ],
      username: 'Ana Gómez',
      shortUsername: 'anaG',
      timestamp: '18 Junio 10:00am'
    }
  ];

  constructor() { }

  getAllPosts(): Post[] {
    return this.posts;
  }

  findPostsByUsername(username: string): Post[] {
    return this.posts.filter(post => post.shortUsername === username);
  }
}

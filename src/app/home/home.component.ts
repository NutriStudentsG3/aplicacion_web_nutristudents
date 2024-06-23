import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userGoal: string = 'Objetivo elegido por el usuario';
  reminders: string[] = ['Preparar comida los domingos', 'Tomar 8 vasos de agua a diario', 'Dormir 8 horas'];
  newReminder: string = '';
  isEditing: boolean = false;

  articles = [
    {
      title: 'El Impacto de un Plan de Estudios Bien Estructurado y Hábitos Alimenticios Saludables en el Rendimiento Académico',
      readTime: 'Lectura de 3 min',
      image: '/images/articulo1.jpg' // Ruta a la imagen 1
    },
    {
      title: 'Las Consecuencias Negativas de un Plan de Estudios Deficiente y Hábitos Alimenticios Inadecuados en el Rendimiento Académico',
      readTime: 'Lectura de 5 min',
      image: '/images/articulo2.webp' // Ruta a la imagen 2
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  addReminder(): void {
    if (this.newReminder.trim()) {
      this.reminders.push(this.newReminder);
      this.newReminder = '';
    } else {
      alert('Por favor, escribe un recordatorio.');
    }
  }

  deleteReminder(index: number): void {
    this.reminders.splice(index, 1);
  }

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  editGoal(): void {
    // Lógica para editar el objetivo
  }
}
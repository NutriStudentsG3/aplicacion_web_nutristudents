import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-obejectives',
  templateUrl: './obejectives.component.html',
  styleUrls: ['./obejectives.component.css']
})

export class ObejectivesComponent {
  selectedObjective: string = ''; // Variable para almacenar el objetivo seleccionado

  onSelectObjective(objective: string): void {
    this.selectedObjective = objective;
  }
  constructor(private router: Router) { }

  onSubmit(): void {
    if (this.selectedObjective) {
      // Lógica para manejar el objetivo seleccionado y redirigir
      console.log('Objetivo seleccionado:', this.selectedObjective);
      this.router.navigateByUrl('/meetuser');

      // Aquí podrías redirigir a la siguiente página o realizar otra acción
    } else {
      alert('Por favor, selecciona un objetivo.');
    }
  }
}
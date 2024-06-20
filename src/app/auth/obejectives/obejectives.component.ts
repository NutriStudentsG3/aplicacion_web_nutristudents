import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';


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
  constructor(private router: Router, private registerService: RegisterService) { }

  onSubmit(): void {
    if (this.selectedObjective) {
      
      console.log('Objetivo seleccionado:', this.selectedObjective);
      this.registerService.setGoal({plan: this.selectedObjective})
      this.router.navigateByUrl('/meetuser');

    } else {
      alert('Por favor, selecciona un objetivo.');
    }
  }
}
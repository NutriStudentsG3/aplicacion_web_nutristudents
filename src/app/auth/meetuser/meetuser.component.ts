import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetuser',
  templateUrl: './meetuser.component.html',
  styleUrls: ['./meetuser.component.css']
})
export class MeetuserComponent {
  selectedOption: string = '';

  constructor(private router: Router) {}

  onSelectOption(option: string): void {
    this.selectedOption = option;
  }
  

  onSubmit(): void {
    if (this.selectedOption) {
      // Lógica para manejar la opción seleccionada y redirigir
      console.log('Opción seleccionada:', this.selectedOption);
      this.router.navigate(['/result']); // Redirige a la siguiente página
    } else {
      alert('Por favor, selecciona una opción.');
    }
  }
}
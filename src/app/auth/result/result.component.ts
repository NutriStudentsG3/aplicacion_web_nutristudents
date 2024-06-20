import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(private router: Router) {}

  onSubmit(): void {
    // Aquí puedes manejar cualquier lógica adicional antes de redirigir
    this.router.navigate(['/home']); // Redirige a la siguiente página
  }
}

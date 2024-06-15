import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/)]],
      cardName: ['', Validators.required],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }

  onSubmit() {
    if (this.subscriptionForm.valid) {
      // Aquí puedes manejar el envío del formulario, como enviar los datos al servidor
      console.log(this.subscriptionForm.value);
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      this.subscriptionForm.markAllAsTouched();
    }
  }

  // Métodos para acceder a los controles del formulario y verificar su estado
  get cardNumber() { return this.subscriptionForm.get('cardNumber'); }
  get cardName() { return this.subscriptionForm.get('cardName'); }
  get expiryDate() { return this.subscriptionForm.get('expiryDate'); }
  get cvv() { return this.subscriptionForm.get('cvv'); }
}



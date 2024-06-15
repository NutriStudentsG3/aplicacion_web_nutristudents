import { Injectable } from '@angular/core';
import { UserStoreService } from '../../account/services/user.store.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private userStore : UserStoreService) { }
  registerUser(userData: any): boolean {
    // Simulación de registro de usuario
    console.log('Registrando usuario:', userData);
    this.userStore.setUser(userData); // Guarda el usuario en el almacenamiento (simulado)
    return true; 
  }
}
import { Injectable } from '@angular/core';
import { UserStoreService } from '../../account/services/user.store.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private userStore : UserStoreService) { }

  createUser(newuser : any) : boolean{
    /*
      this.http.post<any>(this.apiUrl, userData).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.message = 'Registro exitoso';
        },
        error => {
          console.error('Error en el registro', error);
          this.message = 'Error en el registro';
        }
      );*/
      
    this.userStore.loadSampleUser()
    return true;
  }


}

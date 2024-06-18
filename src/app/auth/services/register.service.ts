import { Injectable } from '@angular/core';
import { UserStoreService } from '../../account/services/user.store.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:4200/api/register'; // URL de tu API para registrar usuarios

  constructor(private http: HttpClient,private userStore : UserStoreService) { }


  createUser(newuser : any) : boolean{
    
     this.http.post<any>(this.apiUrl, userData).subscribe(
        response => {
          console.log('Registro exitoso', response);
          this.message = 'Registro exitoso';
        },
        error => {
          console.error('Error en el registro', error);
          this.message = 'Error en el registro';
        },
     )
    }


}

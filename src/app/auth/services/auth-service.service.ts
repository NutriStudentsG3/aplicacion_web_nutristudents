import { Injectable } from '@angular/core';
import { UserStoreService } from '../../account/services/user.store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private userStore : UserStoreService) { }

  validateUser(email: string, password: string): boolean{
    //implement api call
    this.userStore.loadSampleUser()
    return true
  }
}

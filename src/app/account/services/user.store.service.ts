import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private userSubject = new BehaviorSubject<User|undefined>(undefined)
  user$ = this.userSubject.asObservable();

  constructor() {
    this.loadSampleUser()
  }

  setUser(user: User){
    this.userSubject.next(user)
  }

  getUser(): User | undefined {
    return this.userSubject.value
  }
  
  loadSampleUser(){
    const sample = {
      username : "sebasvp2005",
      firstname : "Sebastian",
      lastname : "Valdivia",
      plan: "Gain muscle mass",
      phone: "992113864",
      email: "sebasvp2005@gmail.com"
    }
    this.setUser(sample)
  }

}

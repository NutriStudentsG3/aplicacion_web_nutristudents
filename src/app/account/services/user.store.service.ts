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
    
  }

  setUser(user: User){
    this.userSubject.next(user)
  }

  getUser(): User | undefined {
    return this.userSubject.value
  }

}

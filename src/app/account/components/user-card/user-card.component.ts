import { Component } from '@angular/core';
import { UserStoreService } from '../../services/user.store.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  subscription : Subscription
  user : User|undefined
  constructor(private userStore : UserStoreService){
    this.subscription = this.userStore.user$.subscribe(user => {
      this.user = user
    });
    console.log(this.user)
  }

  

}

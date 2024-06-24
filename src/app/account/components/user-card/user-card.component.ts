import { Component } from '@angular/core';
import { UserStoreService } from '../../services/user.store.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  subscription : Subscription|undefined
  user : User|undefined
  userStored = this.userStore.getUser()!
  constructor(private userStore : UserStoreService, private activatedRoute : ActivatedRoute, private userService : UserService){
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.user = this.userService.getUserByUsername(id)!;
        console.log(this.user)
      }
    });
    console.log(this.userStore.getUser(), this.user)

    if(this.userStore.getUser()?.username==this.user?.username){
      this.subscription = this.userStore.user$.subscribe(user => {
        this.user = user
      });
      console.log(this.user)
    }
  }

  

}

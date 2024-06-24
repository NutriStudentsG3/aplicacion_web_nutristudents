import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserStoreService } from '../../services/user.store.service';

@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks-tab.component.html',
  styleUrl: './tasks-tab.component.css'
})
export class TasksTabComponent {
  user : User | undefined
  userStored : User
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private userStore : UserStoreService){
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.user = this.userService.getUserByUsername(id)!;
      }

    });

    this.userStored = this.userStore.getUser()!;

  }

}

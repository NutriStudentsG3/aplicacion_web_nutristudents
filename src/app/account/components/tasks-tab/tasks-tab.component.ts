import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserStoreService } from '../../services/user.store.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks-tab.component.html',
  styleUrl: './tasks-tab.component.css'
})
export class TasksTabComponent  implements OnInit{
  user : User | undefined
  userStored : User|undefined
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private userStore : UserStoreService){
  }

  async ngOnInit(){
    const params = await firstValueFrom(this.activatedRoute.paramMap);
    const id = params.get('id');
    if (id) {
      this.user = await this.userService.getUserByUsername(id)!;
    }
    this.userStored = this.userStore.getUser()!;
  }

}

import { Component, OnInit } from '@angular/core';
import { UserStoreService } from '../../../account/services/user.store.service';
import { User } from '../../../account/models/user.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  user : User|undefined 

  constructor(private userStore: UserStoreService) {
    this.user = this.userStore.getUser(); // Get the user data 

  }

  ngOnInit(): void {
   
  }

}
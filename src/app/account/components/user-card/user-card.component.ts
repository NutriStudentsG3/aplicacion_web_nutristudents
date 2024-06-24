import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserStoreService } from '../../services/user.store.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  user: User | undefined;
  userStored = this.userStore.getUser();

  constructor(
    private userStore: UserStoreService, 
    private activatedRoute: ActivatedRoute, 
    private userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      const params = await firstValueFrom(this.activatedRoute.paramMap);
      const id = params.get('id');
      if (id) {
        this.user = await this.userService.getUserByUsername(id);
        console.log(this.user);
      }
      
      console.log(this.userStore.getUser(), this.user);

      if (this.userStore.getUser()?.username === this.user?.username) {
        this.subscription = this.userStore.user$.subscribe(user => {
          this.user = user;
          console.log(this.user);
        });
      }
    } catch (error) {
      console.error('Error in ngOnInit', error);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

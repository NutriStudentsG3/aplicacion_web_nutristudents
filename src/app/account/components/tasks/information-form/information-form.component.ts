import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserStoreService } from '../../../services/user.store.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css']
})
export class InformationFormComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  user: User | undefined;
  subscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userStore: UserStoreService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { 
    this.userForm = this.createForm();
  }

  ngOnInit(): void {
    this.loadUser();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  private async loadUser(): Promise<void> {
    try {
      const params = await firstValueFrom(this.activatedRoute.paramMap);
      const id = params.get('id');
      if (id) {
        this.user = await this.userService.getUserByUsername(id);
        if (this.user) {
          this.userForm.patchValue(this.user);
          console.log(this.user);
        }
      }

      const storedUser = this.userStore.getUser();
      if (storedUser?.username === this.user?.username) {
        this.subscription = this.userStore.user$.subscribe(user => {
          if (user) {
            this.user = user;
            this.userForm.patchValue(user);
          }
        });
      }
    } catch (error) {
      console.error('Error loading user', error);
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser = { ...this.user, ...this.userForm.value };
      this.userStore.setUser(updatedUser);
    }
  }
}

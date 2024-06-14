import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserStoreService } from '../../../services/user.store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrl: './information-form.component.css'
})
export class InformationFormComponent implements OnInit , OnDestroy{
  userForm : FormGroup
  user : User|undefined
  subscription: Subscription;
  constructor(private formBuilder : FormBuilder, private userStore : UserStoreService){

    this.userForm = this.formBuilder.group({
      username: [this.user?.username , Validators.required],
      firstname: [this.user?.firstname , Validators.required],
      lastname: [this.user?.lastname , Validators.required],
      phone: [this.user?.phone,[ Validators.required,  Validators.pattern('^[0-9]+$')]],
      email: [this.user?.email,[ Validators.required, Validators.email]],
    })

    this.subscription = this.userStore.user$.subscribe(user => {
      if (user) {
        this.user = user;
        this.userForm.patchValue(user); // Update form with user data
      }
    });
  }

  ngOnInit(): void {
    this.subscription = this.userStore.user$.subscribe(user => {
      if (user) {
        this.user = user;
        this.userForm.patchValue(user); // Update form with user data
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser = { ...this.user, ...this.userForm.value };
      this.userStore.setUser(updatedUser);
    }
  }
}

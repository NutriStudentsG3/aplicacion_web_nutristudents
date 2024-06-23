import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserStoreService } from '../../../services/user.store.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrl: './information-form.component.css'
})
export class InformationFormComponent implements OnInit , OnDestroy{
  userForm : FormGroup
  user : User|undefined
  subscription: Subscription|undefined;

  constructor(private formBuilder : FormBuilder, private userStore : UserStoreService, private activatedRoute: ActivatedRoute, private userService: UserService){

    this.userForm = this.formBuilder.group({
      username: [this.user?.username , Validators.required],
      firstname: [this.user?.firstname , Validators.required],
      lastname: [this.user?.lastname , Validators.required],
      phone: [this.user?.phone,[ Validators.required,  Validators.pattern('^[0-9]+$')]],
      email: [this.user?.email,[ Validators.required, Validators.email]],
    })

    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.user = this.userService.getUserByUsername(id)!;
        this.userForm.patchValue(this.user);
        console.log(this.user);
      }
    });
    if(this.userStore.getUser()?.username==this.user?.username){
      this.subscription = this.userStore.user$.subscribe(user => {
        if (user) {
          this.user = user;
          this.userForm.patchValue(user); // Update form with user data
        }
      });
    }

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.userStore.getUser()?.username==this.user?.username){
      this.subscription!.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser = { ...this.user, ...this.userForm.value };
      this.userStore.setUser(updatedUser);
    }
  }
}

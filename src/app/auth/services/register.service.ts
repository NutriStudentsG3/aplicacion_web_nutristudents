import { UserService } from './../../account/services/user.service';
import { Injectable } from '@angular/core';
import { UserStoreService } from '../../account/services/user.store.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  

  constructor(private userStore : UserStoreService, private userService: UserService) { }


  createUser(newuser : any) : boolean{
    return this.userService.addUser(newuser)
  }

  setGoal(goal : any){
    console.log("setting")
    let user = this.userStore.getUser()
    let newUser = {...user??{}, ...goal}
    this.userStore.setUser(newUser)
  }


}

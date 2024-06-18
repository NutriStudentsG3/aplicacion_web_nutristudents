import { Injectable } from '@angular/core';
import { UserStoreService } from '../../account/services/user.store.service';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:4200/api/register'; // URL de tu API para registrar usuarios

  constructor(private userStore : UserStoreService) { }


  createUser(newuser : any) : boolean{
    console.log("grdogmdo")

    try{
        let user = this.userStore.getUser()
        let newUser = {...user??{}, ...newuser}
        this.userStore.setUser(newUser)
        console.log(newUser)
        return true
    }
    catch(e){
      return false
    }
  }

  setGoal(goal : any){
    console.log("setting")
    let user = this.userStore.getUser()
    let newUser = {...user??{}, ...goal}
    this.userStore.setUser(newUser)
  }


}

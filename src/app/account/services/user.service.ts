import { UserStoreService } from './user.store.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private users: User[] | undefined;

    constructor(private http: HttpClient, private userStoreService: UserStoreService) {
        // Initialize users
        this.initUsers();
    }

    private async initUsers() {
        const url = `${enviroment.apiurl}/usuario`;
        try {
            const data = await firstValueFrom(this.http.get<User[]>(url));
            console.log(data);
            this.users = data;
        } catch (error) {
            console.error('Error fetching users', error);
            this.users = undefined;
        }
    }

    public async getUserByUsername(username: string): Promise<User | undefined> {
        if (!this.users) {
            await this.initUsers();
        }
        return this.users?.find(user => user.username === username);
    }

    public addUser(user: User): boolean {
        try{
            this.users?.push(user);
            this.userStoreService.setUser(user);
            return true;
        }
        catch(e){
            console.log(e)
            return false;
        }
    }
}
               
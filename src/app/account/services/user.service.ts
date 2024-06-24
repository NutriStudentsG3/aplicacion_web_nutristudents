import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = [
    {
        username: "jdoe",
        firstname: "John",
        lastname: "Doe",
        plan: "premium",
        phone: "555-1234",
        email: "jdoe@example.com"
    },
    {
        username: "asmith",
        firstname: "Alice",
        lastname: "Smith",
        plan: "basic",
        phone: "555-5678",
        email: "asmith@example.com"
    },
    {
        username: "bwilliams",
        firstname: "Bob",
        lastname: "Williams",
        plan: "standard",
        phone: "555-8765",
        email: "bwilliams@example.com"
    },
    {
        username: "cmiller",
        firstname: "Cathy",
        lastname: "Miller",
        plan: "premium",
        phone: "555-4321",
        email: "cmiller@example.com"
    },
    {
        username: "djones",
        firstname: "David",
        lastname: "Jones",
        plan: "basic",
        phone: "555-1357",
        email: "djones@example.com"
    },
    {
        username: "ebrown",
        firstname: "Emily",
        lastname: "Brown",
        plan: "standard",
        phone: "555-2468",
        email: "ebrown@example.com"
    },
    {
        username: "fwhite",
        firstname: "Frank",
        lastname: "White",
        plan: "premium",
        phone: "555-3691",
        email: "fwhite@example.com"
    },
    {
        username: "gblack",
        firstname: "Grace",
        lastname: "Black",
        plan: "basic",
        phone: "555-4826",
        email: "gblack@example.com"
    },
    {
        username: "hgreen",
        firstname: "Henry",
        lastname: "Green",
        plan: "standard",
        phone: "555-5937",
        email: "hgreen@example.com"
    },
    {
        username: "ilane",
        firstname: "Ivy",
        lastname: "Lane",
        plan: "premium",
        phone: "555-6072",
        email: "ilane@example.com"
    },
    {
      username : "sebasvp2005",
      firstname : "Sebastian",
      lastname : "Valdivia",
      plan: "Gain muscle mass",
      phone: "992113864",
      email: "sebasvp2005@gmail.com"
    }
];
getUserByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }
}

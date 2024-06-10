import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  user: any = null; // Declare the user property

  constructor() { }

  ngOnInit(): void {
    this.user = {}; // Initialize user data
  }

}
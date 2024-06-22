import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-layout',
  templateUrl: './plan-layout.component.html',
  styleUrl: './plan-layout.component.css'
})
export class PlanLayoutComponent {
  constructor(private activatedRoute: ActivatedRoute, private location : Location) { 
  }
  goBack(){
    this.location.back()
  }

}

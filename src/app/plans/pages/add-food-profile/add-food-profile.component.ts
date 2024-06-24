import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-food-profile',
  templateUrl: './add-food-profile.component.html',
  styleUrl: './add-food-profile.component.css'
})
export class AddFoodProfileComponent {
  planData : any 

  constructor(private activatedRoute: ActivatedRoute) { 
    activatedRoute.paramMap.subscribe(data => {
      this.planData = {
        planId : data.get('planId')!,
        day : data.get('day')!,
        meal : data.get('meal')!,
      }
    });
  }

}

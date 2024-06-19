import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '../../models/foodItem.model';


@Component({
  selector: 'app-food-profile',
  templateUrl: './food-profile.component.html',
  styleUrl: './food-profile.component.css'
})
export class FoodProfileComponent {

  foodItem: FoodItem = {
    id : 'wefwef',
    name: 'Leche Gloria',
    calories: 209,
    carbs: 20,
    fat: 16,
    protein: 12,
  }
  total : number  =  this.foodItem.protein + this.foodItem.carbs + this.foodItem.fat

  donutChartData : any = {
    carbs: this.foodItem.carbs,
    protein:this.foodItem.protein,
    fat: this.foodItem.fat,
  }

  
  
  constructor(private router: ActivatedRoute, private location : Location){
  }
  goBack(){
    this.location.back()
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '../../models/foodItem.model';
import { FoodService } from '../../services/food.service';


@Component({
  selector: 'app-food-profile',
  templateUrl: './food-profile.component.html',
  styleUrl: './food-profile.component.css'
})
export class FoodProfileComponent implements OnInit {

  @Input() planData: object|undefined
  
  foodItem: FoodItem | undefined= undefined
  total : number = 0

  donutChartData : any = {}

  imageStyle: { [key: string]: string } = {}
  
  gramsInput : number = 0
  
  
  
  constructor(private activatedRoute: ActivatedRoute, private location : Location, private foodService: FoodService){
  
    this.activatedRoute.paramMap.subscribe(params => {
      const id :number= Number(params.get('id'));
      if (id) {

        this.foodItem = foodService.getFoodById(id)!

        this.total = this.foodItem.protein + this.foodItem.carbs + this.foodItem.fat

        this.donutChartData = {
          carbs: this.foodItem.carbs,
          protein:this.foodItem.protein,
          fat: this.foodItem.fat,
        }

        this.imageStyle = {
          backgroundImage: `url(${this.foodItem.image})`
        };
      }
    });
  }

  ngOnInit() {
    
  }
  
  goBack(){
    this.location.back()
  }

  addItem(){
    if(this.planData===undefined)return
    
  }

}

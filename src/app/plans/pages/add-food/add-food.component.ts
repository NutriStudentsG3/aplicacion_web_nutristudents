import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '../../models/foodItem.model';
import { FoodService } from '../../services/food.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css'
})
export class AddFoodComponent {
  filteredItems: FoodItem[] = [];
  searchControl = new FormControl('');

  planId: string | null = this.activatedRoute.snapshot.paramMap.get('planId');
  day: string | null = this.activatedRoute.snapshot.paramMap.get('day');
  meal: string | null = this.activatedRoute.snapshot.paramMap.get('meal');

  constructor(private activatedRoute: ActivatedRoute, private location : Location, private foodService: FoodService) { 
    this.searchControl.valueChanges.subscribe(value => {
      this.filteredItems = this.filterItems(value);
    });
  }


  filterItems(searchTerm: string | null) {
    return this.foodService.filterItems(searchTerm)
  }

  goBack(){
    this.location.back()
  }

}

import { Injectable } from '@angular/core';
import { FoodItem } from '../models/foodItem.model';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodList: FoodItem[] | undefined =[]

  constructor(private http: HttpClient) { 
    this.initFoods()
    console.log(this.foodList)

  }

  initFoods(){
    const url = `${enviroment.apiurl}/comidas`
    this.http.get<FoodItem[]>(url).subscribe(data => {
      this.foodList = data;
    })
  }

  getFoodById(id: string){
    return this.foodList?.find(item => item.foodId === id);
  }

  getAllFoods() : FoodItem[]{
    if(!this.foodList){
      this.initFoods()
    }
    return this.foodList? this.foodList : []
  }

  filterItems(searchTerm: string | null): FoodItem[] {
    if (!searchTerm) {
      return [];
    }
    return this.foodList!.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}

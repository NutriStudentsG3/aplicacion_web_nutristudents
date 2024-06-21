import { Injectable } from '@angular/core';
import { FoodItem } from '../models/foodItem.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodList: FoodItem[] = [
    {
      id: 1,
      name: 'Leche Gloria',
      calories: 209,
      carbs: 20,
      fat: 16,
      protein: 12,
      image: "https://corporacionliderperu.com/48308-large_default/gloria-leche-tarro-light-roja-gde-x-390-gr.jpg"
    },
    {
      id: 2,
      name: 'Pan Bimbo',
      calories: 270,
      carbs: 50,
      fat: 5,
      protein: 9,
      image: "https://metroio.vtexassets.com/arquivos/ids/251368/141803-01-69799.jpg?v=638173958286230000g"
    },
    {
      id: 3,
      name: 'Yogurt Danone',
      calories: 150,
      carbs: 25,
      fat: 3,
      protein: 6,
      image: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750103239851L.jpg"
    },
    {
      id: 4,
      name: 'Queso Andino',
      calories: 300,
      carbs: 1,
      fat: 25,
      protein: 15,
      image: "https://wongfood.vtexassets.com/arquivos/ids/692668-800-auto?v=638446737725070000&width=800&height=auto&aspect=true"
    },
    {
      id:5,
      name: 'Manzana Roja',
      calories: 95,
      carbs: 25,
      fat: 0.3,
      protein: 0.5,
      image: "https://aceleralastatic.nyc3.cdn.digitaloceanspaces.com/files/uploads/1499/1695653885-33-manzana-roja-importada-jpeg.jpeg"
    }
  ];

  constructor() { }

  getFoodById(id: number){
    return this.foodList.find(item => item.id === id);
  }

  getAllFoods(){
    return this.foodList
  }
}

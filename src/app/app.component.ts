import { Component } from '@angular/core';
import categoriesData from '../assets/data.json';
import {DataObj} from './models/DataObj';
import {Dish} from './models/Dish';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {



  protected readonly categoriesData = categoriesData;
  dataObjs: DataObj[] = categoriesData as DataObj[];
  selectedDishes: Dish[] = [];
  private display: string;

  addDishEventEmitter(dish:Dish) {
    this.selectedDishes.push(dish);
  }

  removeDishEventEmitter(dish:Dish) {
    this.selectedDishes.forEach( (element, index)=> {
      if (dish.name == element.name) {
        this.selectedDishes.splice(index,1)
      }
    });
  }
}

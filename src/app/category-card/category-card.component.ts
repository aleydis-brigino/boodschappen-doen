import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataObj} from '../models/DataObj';
import {Dish} from '../models/Dish';

@Component({
  standalone: true,
  selector: 'category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {

  @Input({required:true})
  categoryData:DataObj;
  @Output()
  addDishEventEmitter = new EventEmitter<Dish>();
  @Output()
  removeDishEventEmitter = new EventEmitter<Dish>();

  onDishSelected(checked:Boolean, dish:Dish) {
    if (checked) {
      this.addDishEventEmitter.emit(dish);
    } else {
      this.removeDishEventEmitter.emit(dish);
    }
  }


}

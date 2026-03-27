import {Component, Input} from '@angular/core';
import {Dish} from '../models/Dish';
import {Ingredient} from '../models/Ingredient';

@Component({
  standalone: true,
  selector: 'result-modal',
  imports: [],
  templateUrl: './result-modal.component.html',
  styleUrl: './result-modal.component.css'
})
export class ResultModalComponent {

  @Input()
  dishes: Dish[] = [];

  get ingredients(): Ingredient[] {
    const allIngredients = this.dishes.reduce((all, dish) => {
      return all.concat(dish.ingredients || []);
    }, [] as Ingredient[]);

    const seen = new Set<string>();
    return allIngredients.filter((ingredient) => {
      const key = (ingredient.ingredient || ingredient.name || '').trim().toLowerCase();

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  ingredients: any[] = [];
  @Output() onIngredientsSelected = new EventEmitter<any[]>();

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {

    this.ingredientService.getIngredients().subscribe({
      next: (data) => {
        this.ingredients = data.map(ingredient => ({
          ...ingredient,
          selected: false
        }));
        console.log('Ingredients:', this.ingredients); // Log the data to see if ingredients are received
      },
      error: (err) => {
        console.error('Error subscribing to ingredients', err);
      }
    });
  }
    
    
  //   this.ingredientService.getIngredients().subscribe(data => {
  //     // Initialize all ingredients as unselected
  //     this.ingredients = data.map(ingredient => ({
  //       ...ingredient,
  //       selected: false
  //     }));
  //   });
  // }

  submitSelection() {
    const selectedIngredients = this.ingredients.filter(ingredient => ingredient.selected);
    this.onIngredientsSelected.emit(selectedIngredients);
  }
}

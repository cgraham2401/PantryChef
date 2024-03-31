import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {
  ingredients: any[] = [];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe(data => {
      this.ingredients = data;
    });
  }
}

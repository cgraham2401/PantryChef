import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service'; 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }
}

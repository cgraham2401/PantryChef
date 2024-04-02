import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.page.html',
  styleUrls: ['./recipe-search.page.scss'],
})
export class RecipeSearchPage implements OnInit {
  searchTerm: string = '';
  filteredRecipes: any[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
  
  searchRecipes() {
    if (this.searchTerm.trim()) {
      this.recipeService.getRecipes().subscribe(recipes => {
        this.filteredRecipes = recipes.filter(recipe => 
          recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    } else {
      //clear the list if empty
      this.filteredRecipes = [];
    }
  }

  fetchAllRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.filteredRecipes = recipes;
    });
  }
}

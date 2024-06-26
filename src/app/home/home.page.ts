import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RecipeService } from 'src/app/services/recipe.service';

interface Recipe {
  cookingTime: string;
  ingredients: string[]; 
  name: string;
  servings: number; 
  steps: string[]; 
  matchCount?: number; 
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  selectedIngredients: string[] = []; // hold the selected ingredient names as strings
  filteredRecipes: Recipe[] = []; // hold the filtered recipes with match counts

  constructor(private camera: Camera, private recipeService: RecipeService) {}

  ngOnInit(): void {}
  
  // Called when the user selects ingredients
  handleIngredientSelection(selectedIngredientNames: string[]): void {
    // use selected ingredient for filtering
    this.filterRecipes(selectedIngredientNames);
  }

  // Filter recipes based on selected ingredients
  filterRecipes(selectedIngredientNames: string[]): void {
    this.selectedIngredients = selectedIngredientNames; // Update the selected ingredients
    this.recipeService.getRecipes().subscribe((allRecipes: Recipe[]) => {
      //filter recipes to include any of the selected ingredients
      const matchingRecipes = allRecipes.filter(recipe =>
        recipe.ingredients.some(ingredient => this.selectedIngredients.includes(ingredient))
      );

      // Then, calculate the number of selected ingredients present in each recipe
      matchingRecipes.forEach(recipe => {
        recipe.matchCount = recipe.ingredients.filter(ingredient =>
          this.selectedIngredients.includes(ingredient)
        ).length;
      });

      // Sort the recipes based on the match count
      this.filteredRecipes = matchingRecipes.sort((a, b) => (b.matchCount || 0) - (a.matchCount || 0));
    });
  }
}

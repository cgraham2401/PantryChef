import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  filteredRecipes: any[] = [];

  constructor(private camera: Camera, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.fetchAllRecipes();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {

        let base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(base64Image);
      },
      (error) => {
        console.error('Camera error:', error);
      }
    );
  }

  filterRecipes(selectedIngredients: any[]) {
    console.log('Selected Ingredients:', selectedIngredients[0].id); // Log the selected ingredients
    if (selectedIngredients.length > 0) {
      // Looking for recipes based on the first selected ingredient for simplicity
      const ingredientId = selectedIngredients[0].id;

      this.recipeService.getRecipesByIngredient(ingredientId).subscribe({
        next: (recipes) => {
          this.filteredRecipes = recipes;
          console.log('Filtered Recipes:', this.filteredRecipes); // Log the recipes to see what's returned
        },
        error: (err) => {
          console.error('Error fetching recipes by ingredient:', err); // Log any errors that occur
        }
      });
    } else {
      this.filteredRecipes = [];
    }
  }

  fetchAllRecipes() {
  this.recipeService.getRecipes().subscribe({
    next: (recipes) => {
      console.log('All recipes:', recipes); // Log all recipes to see what's returned
    },
    error: (error) => {
      console.error('Error fetching all recipes:', error);
    }
  });
}


  handleIngredientSelection(selectedIngredients: any[]) {
    console.log(selectedIngredients);
  }
}

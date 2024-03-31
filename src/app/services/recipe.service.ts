import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private firestore: AngularFirestore) { }

  // Fetch all recipes
  getRecipes() {
    return this.firestore.collection('recipes').valueChanges({ idField: 'id' });
  }

  // Add a new recipe
  addRecipe(recipe: any) {
    return this.firestore.collection('recipes').add(recipe);
  }

  // Get recipes by ingredient
  getRecipesByIngredient(ingredientId: string) {
    return this.firestore.collection('recipes', ref => ref.where('ingredients', 'array-contains', ingredientId)).valueChanges({ idField: 'id' });
  }
}

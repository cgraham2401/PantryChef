import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
//
interface Recipe {
cookingTime: string;
ingredients: string[];
name: string;
servings: number;
steps: string[];
}
//

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private firestore: AngularFirestore) { }

  // Fetch all recipes
  getRecipes() {
    return this.firestore.collection('Recipes').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Recipe; 
        const id = a.payload.doc.id;
        return { id, ...data }; 
      }))
    );
  }
  
  getRecipesWithAnyOfTheseIngredients(selectedIngredients: string[]) {
    return this.firestore.collection('Recipes', ref => 
      ref.where('ingredients', 'array-contains-any', selectedIngredients))
      .valueChanges({ idField: 'id' });
  }
  // getRecipes() {
  //   return this.firestore.collection('Recipes').valueChanges({ idField: 'id' });
  // }

  // Add a new recipe
  addRecipe(recipe: any) {
    return this.firestore.collection('Recipes').add(recipe);
  }


  // Get recipes by ingredient
  getRecipesByIngredient(ingredientName: string) {
    return this.firestore.collection('Recipes', ref => ref.where('ingredients', 'array-contains', ingredientName))
      .valueChanges({ idField: 'id' });

  }

}

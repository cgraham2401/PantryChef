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
    return this.firestore.collection('Recipes').valueChanges({ idField: 'id' }).pipe(
      tap(recipes => console.log('All recipes:', recipes)), // Log the results
      catchError(err => {
        console.error('Error fetching recipes:', err);
        return throwError(() => new Error('Error fetching recipes'));
      })
    );
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




// getRecipesByIngredient(ingredientId: string) {
//   return this.firestore.collection('Recipes', ref => ref.where('ingredients', 'array-contains', ingredientId))
//     .snapshotChanges() // Use snapshotChanges to access the metadata, including the doc ID
//     .pipe(
//       map(actions => actions.map(a => {
//         const data = a.payload.doc.data() as Recipe;
//         const id = a.payload.doc.id;
//         return { id, ...data }; // Combine the id and the rest of the data
//       })),
//       tap(recipes => console.log('Recipes with ingredient:', recipes)), // Log the results
//       catchError(err => {
//         console.error('Error fetching recipes by ingredient:', err);
//         return throwError(() => new Error('Error fetching recipes by ingredient'));
//       })
//     );
// }




  // Get recipes by ingredient
//   getRecipesByIngredient(ingredientId: string) {
//     return this.firestore.collection('Recipes', ref => ref.where('Ingredients', 'array-contains', ingredientId)).valueChanges({ idField: 'id' });
//   }
}

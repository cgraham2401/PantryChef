import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  constructor(private firestore: AngularFirestore) { }

  // Fetch all ingredients
  getIngredients() {
    return this.firestore.collection('Ingredients').valueChanges({ idField: 'id' })
    .pipe(
      tap(data => console.log('Fetched ingredients:', data)), 
      catchError(err => {
        console.error('Error fetching ingredients', err);
        return throwError(() => err); // Pass a factory function instead of a value
      })
    );
    // return this.firestore.collection('ingredients').valueChanges({ idField: 'id' });
  }

  // Add a new ingredient
  addIngredient(ingredient: any) {
    return this.firestore.collection('ingredients').add(ingredient);
  }
}

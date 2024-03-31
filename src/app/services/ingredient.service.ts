import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  constructor(private firestore: AngularFirestore) { }

  // Fetch all ingredients
  getIngredients() {
    return this.firestore.collection('ingredients').valueChanges({ idField: 'id' });
  }

  // Add a new ingredient
  addIngredient(ingredient: any) {
    return this.firestore.collection('ingredients').add(ingredient);
  }
}

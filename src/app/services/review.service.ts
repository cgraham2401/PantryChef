import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs/operators';
import { serverTimestamp } from 'firebase/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(
    private afStorage: AngularFireStorage,
    private firestore: AngularFirestore
  ) {}

  dataURLtoBlob(dataURL: string) {
    let binary = atob(dataURL.split(',')[1]);
    let array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

  uploadImage(imageData: string, reviewText: string, selectedRecipeId: string, userId: string) {
    const imageBlob = this.dataURLtoBlob(imageData);
    const filePath = `reviews/${new Date().getTime()}.jpeg`;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, imageBlob);

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.saveReview(reviewText, url, selectedRecipeId, userId);
        });
      })
    ).subscribe();
  }


  saveReview(reviewText: string, imageUrl: string, recipeId: string, userId: string) {
    const reviewData = {
      text: reviewText,
      imageUrl: imageUrl,
      recipeId: recipeId,
      userId: userId,
      createdAt: serverTimestamp(),
    };
    return this.firestore.collection('Reviews').add(reviewData);
  }

  //added method to fetch reviews by recipe selected
  getReviewsByRecipeId(recipeId: string) {
    return this.firestore.collection('Reviews', ref => ref.where('recipeId', '==', recipeId)).valueChanges();
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { serverTimestamp } from 'firebase/firestore';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import { ReviewService } from '../services/review.service';


@Component({
  selector: 'app-submit-review',
  templateUrl: 'submit-review.page.html',
  styleUrls: ['submit-review.page.scss'],
})
export class SubmitReviewPage {
  reviewText: string = '';
  imageUrl: string = '';
  recipes: any[] = [];
  selectedRecipeId: string = '';
  userId: string = '';
  
  
  constructor(
    private camera: Camera,
    private afStorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private router: Router,
    private recipeService: RecipeService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.fetchRecipes();
  }
  
  fetchRecipes() {
    this.recipeService.getRecipes().subscribe((recipes: any[]) => {
      this.recipes = recipes;
      console.log(this.recipes);
    });
  }

  goHome() {
    this.router.navigateByUrl('/home');  
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
        this.uploadImage(base64Image); // Call upload function
      },
      (error) => {
        console.error("Error capturing image: ", error);
      }
    );
  

  }

  // Utility function to convert base64 to Blob
dataURLtoBlob(dataURL: string) {
  const byteString = atob(dataURL.split(',')[1]);
  const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
  
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], {type: mimeString});
}

//upload function
uploadImage(base64Image: string) {
  const imageBlob = this.dataURLtoBlob(base64Image);
  const filePath = `reviews/${new Date().getTime()}_meal.jpg`; 
  const fileRef = this.afStorage.ref(filePath);
  const task = this.afStorage.upload(filePath, imageBlob);

  task.snapshotChanges().pipe(
    finalize(() => {
      fileRef.getDownloadURL().subscribe(url => {
        console.log("Uploaded Image URL: ", url);
        
        this.imageUrl = url;
        
        
      })
    })
  ).subscribe();
}

saveReview() {
  if (!this.reviewText || !this.imageUrl || !this.selectedRecipeId || !this.userId) {
    console.error("Missing information.");
    return;
  }

  const reviewId = `${this.selectedRecipeId}_review_by_${this.userId}`;

  const reviewData = {
    text: this.reviewText,
    imageUrl: this.imageUrl,
    recipeId: this.selectedRecipeId,
    userId: this.userId,
    createdAt: serverTimestamp() 
  };

  this.firestore.collection('Reviews').doc(reviewId).set(reviewData).then(() => {
    console.log("Review saved successfully!");
    // Optional: Reset form or navigate away
  }).catch(err => {
    console.error("Error saving review:", err);
  });
}
}

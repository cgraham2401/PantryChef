import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeReviewsPageRoutingModule } from './recipe-reviews-routing.module';

import { RecipeReviewsPage } from './recipe-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeReviewsPageRoutingModule
  ],
  declarations: [RecipeReviewsPage]
})
export class RecipeReviewsPageModule {}

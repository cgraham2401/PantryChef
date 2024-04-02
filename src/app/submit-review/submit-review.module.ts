import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubmitReviewPageRoutingModule } from './submit-review-routing.module';
import { SubmitReviewPage } from './submit-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitReviewPageRoutingModule
  ],
  declarations: [SubmitReviewPage]
})
export class SubmitReviewPageModule {}

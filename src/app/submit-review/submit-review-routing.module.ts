import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitReviewPage } from './submit-review.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitReviewPageRoutingModule {}

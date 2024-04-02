import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeReviewsPage } from './recipe-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeReviewsPageRoutingModule {}

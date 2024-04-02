import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'submit-review',
    loadChildren: () => import('./submit-review/submit-review.module').then( m => m.SubmitReviewPageModule)
  },
  {
    path: 'recipe-reviews',
    loadChildren: () => import('./recipe-reviews/recipe-reviews.module').then( m => m.RecipeReviewsPageModule)
  },
  {
    path: 'recipe-search',
    loadChildren: () => import('./recipe-search/recipe-search.module').then( m => m.RecipeSearchPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

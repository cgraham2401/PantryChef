import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-recipe-reviews',
  templateUrl: './recipe-reviews.page.html',
  styleUrls: ['./recipe-reviews.page.scss'],
})
export class RecipeReviewsPage implements OnInit {
  recipes: any[] = [];
  reviews: any[] = [];
  selectedRecipeId?: string;

  constructor(private recipeService: RecipeService, private reviewService: ReviewService) { }

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  loadReviews() {
    if (this.selectedRecipeId) {
      this.reviewService.getReviewsByRecipeId(this.selectedRecipeId).subscribe(reviews => {
        this.reviews = reviews;
      });
    }
  }
}

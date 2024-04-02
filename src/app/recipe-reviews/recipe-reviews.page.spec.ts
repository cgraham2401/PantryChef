import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeReviewsPage } from './recipe-reviews.page';

describe('RecipeReviewsPage', () => {
  let component: RecipeReviewsPage;
  let fixture: ComponentFixture<RecipeReviewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

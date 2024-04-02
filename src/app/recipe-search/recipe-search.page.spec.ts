import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeSearchPage } from './recipe-search.page';

describe('RecipeSearchPage', () => {
  let component: RecipeSearchPage;
  let fixture: ComponentFixture<RecipeSearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

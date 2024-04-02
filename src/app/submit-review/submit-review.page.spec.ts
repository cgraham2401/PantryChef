import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitReviewPage } from './submit-review.page';

describe('SubmitReviewPage', () => {
  let component: SubmitReviewPage;
  let fixture: ComponentFixture<SubmitReviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

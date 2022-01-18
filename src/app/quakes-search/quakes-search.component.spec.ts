import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuakesSearchComponent } from './quakes-search.component';

describe('QuakesSearchComponent', () => {
  let component: QuakesSearchComponent;
  let fixture: ComponentFixture<QuakesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuakesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuakesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

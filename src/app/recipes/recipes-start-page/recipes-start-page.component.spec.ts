import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesStartPageComponent } from './recipes-start-page.component';

describe('RecipesStartPageComponent', () => {
  let component: RecipesStartPageComponent;
  let fixture: ComponentFixture<RecipesStartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesStartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromProductsComponent } from './from-products.component';

describe('FromProductsComponent', () => {
  let component: FromProductsComponent;
  let fixture: ComponentFixture<FromProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

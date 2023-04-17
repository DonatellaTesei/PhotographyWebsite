import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCartComponent } from './hero-cart.component';

describe('HeroCartComponent', () => {
  let component: HeroCartComponent;
  let fixture: ComponentFixture<HeroCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

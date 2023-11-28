import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComicComponent } from './card-comic.component';

describe('CardComicComponent', () => {
  let component: CardComicComponent;
  let fixture: ComponentFixture<CardComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

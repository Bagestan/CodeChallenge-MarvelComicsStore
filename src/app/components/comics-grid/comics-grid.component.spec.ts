import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsGridComponent } from './comics-grid.component';

describe('ComicsGridComponent', () => {
  let component: ComicsGridComponent;
  let fixture: ComponentFixture<ComicsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComicsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

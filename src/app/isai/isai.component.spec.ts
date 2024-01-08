import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaiComponent } from './isai.component';

describe('IsaiComponent', () => {
  let component: IsaiComponent;
  let fixture: ComponentFixture<IsaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

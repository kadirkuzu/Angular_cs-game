import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaslikComponent } from './baslik.component';

describe('BaslikComponent', () => {
  let component: BaslikComponent;
  let fixture: ComponentFixture<BaslikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaslikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaslikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunlerComponent } from './urunler.component';

describe('UrunlerComponent', () => {
  let component: UrunlerComponent;
  let fixture: ComponentFixture<UrunlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

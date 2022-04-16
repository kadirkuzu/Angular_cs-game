import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunEkleComponent } from './urun-ekle.component';

describe('UrunEkleComponent', () => {
  let component: UrunEkleComponent;
  let fixture: ComponentFixture<UrunEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatinAlimComponent } from './satin-alim.component';

describe('SatinAlimComponent', () => {
  let component: SatinAlimComponent;
  let fixture: ComponentFixture<SatinAlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatinAlimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatinAlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

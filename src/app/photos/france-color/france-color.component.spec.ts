import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceColorComponent } from './france-color.component';

describe('FranceColorComponent', () => {
  let component: FranceColorComponent;
  let fixture: ComponentFixture<FranceColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranceColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranceColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

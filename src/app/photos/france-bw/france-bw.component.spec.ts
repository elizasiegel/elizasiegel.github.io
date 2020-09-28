import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceBwComponent } from './france-bw.component';

describe('FranceBwComponent', () => {
  let component: FranceBwComponent;
  let fixture: ComponentFixture<FranceBwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranceBwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranceBwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

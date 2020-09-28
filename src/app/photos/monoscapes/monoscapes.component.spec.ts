import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoscapesComponent } from './monoscapes.component';

describe('MonoscapesComponent', () => {
  let component: MonoscapesComponent;
  let fixture: ComponentFixture<MonoscapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonoscapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoscapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

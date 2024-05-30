import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeselectionComponent } from './type-selection.component';

describe('TypeselectionComponent', () => {
  let component: TypeselectionComponent;
  let fixture: ComponentFixture<TypeselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

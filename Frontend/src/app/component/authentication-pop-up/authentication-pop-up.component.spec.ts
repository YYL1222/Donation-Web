import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationPopUpComponent } from './authentication-pop-up.component';

describe('AuthenticationPopUpComponent', () => {
  let component: AuthenticationPopUpComponent;
  let fixture: ComponentFixture<AuthenticationPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

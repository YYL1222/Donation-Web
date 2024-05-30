import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationNewComponent } from './donation-new.component';

describe('DonationNewComponent', () => {
  let component: DonationNewComponent;
  let fixture: ComponentFixture<DonationNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

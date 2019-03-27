import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetEmailPopUpComponent } from './reset-email-pop-up.component';

describe('ResetEmailPopUpComponent', () => {
  let component: ResetEmailPopUpComponent;
  let fixture: ComponentFixture<ResetEmailPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetEmailPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetEmailPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

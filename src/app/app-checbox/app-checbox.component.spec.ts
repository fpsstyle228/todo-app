import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChecboxComponent } from './app-checbox.component';

describe('AppChecboxComponent', () => {
  let component: AppChecboxComponent;
  let fixture: ComponentFixture<AppChecboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChecboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChecboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

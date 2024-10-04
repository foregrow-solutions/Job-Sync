import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingSetp2Component } from './onboarding-setp2.component';

describe('OnboardingSetp2Component', () => {
  let component: OnboardingSetp2Component;
  let fixture: ComponentFixture<OnboardingSetp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingSetp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingSetp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

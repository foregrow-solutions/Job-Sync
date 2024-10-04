import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingSetp1Component } from './onboarding-setp1.component';

describe('OnboardingSetp1Component', () => {
  let component: OnboardingSetp1Component;
  let fixture: ComponentFixture<OnboardingSetp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingSetp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingSetp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

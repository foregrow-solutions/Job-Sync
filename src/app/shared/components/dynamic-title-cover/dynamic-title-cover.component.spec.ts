import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTitleCoverComponent } from './dynamic-title-cover.component';

describe('DynamicTitleCoverComponent', () => {
  let component: DynamicTitleCoverComponent;
  let fixture: ComponentFixture<DynamicTitleCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTitleCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTitleCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

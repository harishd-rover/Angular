import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudeForm2Component } from './case-stude-form2.component';

describe('CaseStudeForm2Component', () => {
  let component: CaseStudeForm2Component;
  let fixture: ComponentFixture<CaseStudeForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudeForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudeForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

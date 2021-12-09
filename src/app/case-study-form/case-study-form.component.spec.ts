import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyFormComponent } from './case-study-form.component';

describe('CaseStudyFormComponent', () => {
  let component: CaseStudyFormComponent;
  let fixture: ComponentFixture<CaseStudyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

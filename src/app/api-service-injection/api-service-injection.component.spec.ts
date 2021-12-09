import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiServiceInjectionComponent } from './api-service-injection.component';

describe('ApiServiceInjectionComponent', () => {
  let component: ApiServiceInjectionComponent;
  let fixture: ComponentFixture<ApiServiceInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiServiceInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiServiceInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

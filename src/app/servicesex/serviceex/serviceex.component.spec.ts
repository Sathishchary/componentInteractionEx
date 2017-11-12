import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceexComponent } from './serviceex.component';

describe('ServiceexComponent', () => {
  let component: ServiceexComponent;
  let fixture: ComponentFixture<ServiceexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

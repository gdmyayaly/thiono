import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecourComponent } from './onecour.component';

describe('OnecourComponent', () => {
  let component: OnecourComponent;
  let fixture: ComponentFixture<OnecourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnecourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

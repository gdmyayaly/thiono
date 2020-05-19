import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltremobileComponent } from './filtremobile.component';

describe('FiltremobileComponent', () => {
  let component: FiltremobileComponent;
  let fixture: ComponentFixture<FiltremobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltremobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltremobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

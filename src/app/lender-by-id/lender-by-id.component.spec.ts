import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderByIdComponent } from './lender-by-id.component';

describe('LenderByIdComponent', () => {
  let component: LenderByIdComponent;
  let fixture: ComponentFixture<LenderByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenderByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

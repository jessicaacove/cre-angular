import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorByIdComponent } from './investor-by-id.component';

describe('InvestorByIdComponent', () => {
  let component: InvestorByIdComponent;
  let fixture: ComponentFixture<InvestorByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

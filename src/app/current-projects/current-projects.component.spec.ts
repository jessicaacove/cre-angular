import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectsComponent } from './current-projects.component';

describe('StartPageComponent', () => {
  let component: CurrentProjectsComponent;
  let fixture: ComponentFixture<CurrentProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

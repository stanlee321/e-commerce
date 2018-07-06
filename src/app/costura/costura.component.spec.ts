import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosturaComponent } from './costura.component';

describe('CosturaComponent', () => {
  let component: CosturaComponent;
  let fixture: ComponentFixture<CosturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

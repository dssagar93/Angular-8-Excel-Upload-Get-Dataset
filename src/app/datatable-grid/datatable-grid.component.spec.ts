import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableGridComponent } from './datatable-grid.component';

describe('DatatableGridComponent', () => {
  let component: DatatableGridComponent;
  let fixture: ComponentFixture<DatatableGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieEditComponent } from './serie-edit.component';

describe('SerieEditComponent', () => {
  let component: SerieEditComponent;
  let fixture: ComponentFixture<SerieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlogByidComponent } from './viewlog-byid.component';

describe('ViewlogByidComponent', () => {
  let component: ViewlogByidComponent;
  let fixture: ComponentFixture<ViewlogByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlogByidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewlogByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

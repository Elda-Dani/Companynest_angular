import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleavebyidComponent } from './viewleavebyid.component';

describe('ViewleavebyidComponent', () => {
  let component: ViewleavebyidComponent;
  let fixture: ComponentFixture<ViewleavebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewleavebyidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewleavebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

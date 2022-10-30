import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritynavComponent } from './securitynav.component';

describe('SecuritynavComponent', () => {
  let component: SecuritynavComponent;
  let fixture: ComponentFixture<SecuritynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritynavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

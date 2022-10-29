import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityaddComponent } from './securityadd.component';

describe('SecurityaddComponent', () => {
  let component: SecurityaddComponent;
  let fixture: ComponentFixture<SecurityaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterclaimComponent } from './registerclaim.component';

describe('RegisterclaimComponent', () => {
  let component: RegisterclaimComponent;
  let fixture: ComponentFixture<RegisterclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

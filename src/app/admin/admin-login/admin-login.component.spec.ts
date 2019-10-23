import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginComponent } from './admin-login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastModule } from 'primeng/toast';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        ToastModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('admin name field validity', () => {
    let adminName = component.loginForm.controls['adminName']; (1)
    expect(adminName.valid).toBeFalsy(); (2)
  });

  it('admin password field validity', () => {
    let adminPassword = component.loginForm.controls['adminPassword']; (1)
    expect(adminPassword.valid).toBeFalsy(); (2)
  });

  it('admin name required field validity', () => {
    let errors = {};
    let adminName = component.loginForm.controls['adminName'];
    errors = adminName.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });

  it('admin password required field validity', () => {
    let errors = {};
    let adminPassword = component.loginForm.controls['adminPassword'];
    errors = adminPassword.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });

});

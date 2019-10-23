import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterclaimComponent } from './registerclaim.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ToastModule } from 'primeng/toast';

describe('RegisterclaimComponent', () => {
  let component: RegisterclaimComponent;
  let fixture: ComponentFixture<RegisterclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterclaimComponent],
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
    fixture = TestBed.createComponent(RegisterclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

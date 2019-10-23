import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimComponent } from './claim.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';


describe('ClaimComponent', () => {
  let component: ClaimComponent;
  let fixture: ComponentFixture<ClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimComponent],
      imports: [FormsModule,
        ReactiveFormsModule,
        RouterModule,
        RouterTestingModule,
        HttpClientModule,
        ToastModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


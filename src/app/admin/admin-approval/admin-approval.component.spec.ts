import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovalComponent } from './admin-approval.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

describe('AdminApprovalComponent', () => {
  let component: AdminApprovalComponent;
  let fixture: ComponentFixture<AdminApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminApprovalComponent],
      imports: [
        FormsModule,
        HttpClientModule,
        ToastModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

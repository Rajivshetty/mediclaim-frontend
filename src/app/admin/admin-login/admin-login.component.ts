import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClaimDataService } from '../../services/claim-data.service';

import { MessageService } from 'primeng/components/common/messageservice';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [MessageService]
})
export class AdminLoginComponent implements OnInit {

  showAlert: boolean = false;
  login: boolean = false;
  baseUrl: String;

  /* Reactive form for admin login */
  loginForm = new FormGroup({
    adminName: new FormControl('', [Validators.required]),
    adminPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private claimDataService: ClaimDataService, private router: Router, private messageService: MessageService) {
    this.baseUrl = environment.baseApiUrl;
  }

  ngOnInit() {

  }

  /* Admin login method to approve claim  */
  adminLogin(adminCredentials: Object) {
    console.log('Admin Data', adminCredentials);
    this.claimDataService.httpPostRequest(this.baseUrl + '/login', adminCredentials)
      .subscribe(data => {
        console.log('Response Data', data);
        if (this.loginForm.value.adminName == data['adminName']) {
          console.log('data[adminName]', data['adminName']);
          console.log('this.loginId', data['roleId']);
          this.router.navigateByUrl("/adminApproval");
          this.claimDataService.setLoginId(data['roleId']);
        } else {
        }
      }, error => {
        this.messageService.add({ severity: 'error', detail: error.error.message })
      }

      );
  }


}

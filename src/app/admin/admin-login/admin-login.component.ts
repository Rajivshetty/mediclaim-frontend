import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClaimDataService } from '../../claim-data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminDetails: any;
  showAlert: boolean = false;

  /* Reactive form admin login form start*/
  loginForm = new FormGroup({
    adminName: new FormControl('', [Validators.required]),
    adminPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  /* Reactive form admin login form end*/

  constructor(private claimDataService: ClaimDataService, private router: Router) { }

  ngOnInit() {
  }

  /* Admin login start */
  adminLogin(adminCredentials) {
    console.log('Admin Data', adminCredentials);
    this.claimDataService.login(adminCredentials)
      .subscribe(data => {
        this.adminDetails = data
        console.log('User Form Data', this.adminDetails);
        this.showAlert = !this.showAlert;
        if (this.loginForm.value.adminName == "Mahesh" && this.loginForm.value.adminPassword == "mahesh") {
          alert('Logged in Successfully');
          this.router.navigateByUrl("/adminApproval");
        } else {
          alert('Login failed')
        }
      }, error => console.log('Given Details Not Matching...'));
  }
  /* Admin login end */

}

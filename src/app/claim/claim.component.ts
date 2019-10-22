import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClaimDataService } from '../claim-data.service';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  showAlert: boolean = false;
  policyDetails = new FormGroup({
    policyNo: new FormControl(''),
    aadharNo: new FormControl('', [Validators.email, Validators.maxLength(12)]),
    dob: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private claimDataService: ClaimDataService) { }

  ngOnInit() {
  }

  /* Claim method start */
  policyClaim(policyDetails) {
    this.showAlert = !this.showAlert;
    this.claimDataService.claimAmount(policyDetails).subscribe((response) => {
      console.log('repsonse ', response);
      this.router.navigateByUrl("/register");
    });
  }
  /* Claim method end */

}

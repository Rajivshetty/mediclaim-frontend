import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClaimDataService } from '../services/claim-data.service';
import { MessageService } from 'primeng/components/common/messageservice';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
  providers: [MessageService]
})

export class ClaimComponent implements OnInit {

  showAlert: boolean = false;
  baseUrl: String;
  policyDetails = new FormGroup({
    policyNo: new FormControl('', [Validators.required]),
    aadharNo: new FormControl('', [Validators.required, Validators.minLength(12)]),
    dob: new FormControl('', [Validators.required])
  });

  maxDate = moment(new Date()).format('YYYY-MM-DD')

  constructor(private router: Router, private claimDataService: ClaimDataService, private messageService: MessageService) {
    this.baseUrl = environment.baseApiUrl;
  }

  ngOnInit() {

  }

  /* Customer Claim details  method to login  */
  policyClaim(policyDetails) {
    this.claimDataService.setPolicyNo(policyDetails.policyNo);
    this.claimDataService.httpPostRequest(this.baseUrl + 'policies', policyDetails).subscribe((response) => {
      this.messageService.add({ severity: 'success', detail: response['message'] })
      console.log('Claim Login Response ', response);
      this.router.navigateByUrl("/register");
    });
  }

}

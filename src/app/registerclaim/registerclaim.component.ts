import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClaimDataService } from '../services/claim-data.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-registerclaim',
  templateUrl: './registerclaim.component.html',
  styleUrls: ['./registerclaim.component.css'],
  providers: [MessageService]
})
export class RegisterclaimComponent implements OnInit {

  hospitalsListData: any = [];
  diseasList: any;
  baseUrl: string;
  policyNumber: number;

  /*Reactive form to claim details */
  claimDetails = new FormGroup({
    policyNo: new FormControl(''),
    patientName: new FormControl('', [Validators.required]),
    diseaseId: new FormControl('', [Validators.required]),
    admissionDate: new FormControl('', [Validators.required]),
    dischargedDate: new FormControl('', [Validators.required]),
    hospitalId: new FormControl('', [Validators.required]),
    claimAmount: new FormControl('', [Validators.required])
    // dischargeSummary: new FormControl('', [Validators.required]),
  });

  maxDate = moment(new Date()).format('YYYY-MM-DD')

  constructor(private claimDataService: ClaimDataService, private router: Router, private messageService: MessageService) {
    this.baseUrl = environment.baseApiUrl;
  }

  ngOnInit() {
    this.policyNumber = parseInt(this.claimDataService.getPolicyNo());
    console.log('this.policyNumber', this.policyNumber);
    this.getHospitalsList();
    this.getDiseasList();
  }

  /* Method to get list of registered hospitals in the form drop down*/
  getHospitalsList() {
    this.claimDataService.httpGetRequest(this.baseUrl + 'hospitals')
      .subscribe(data => {
        this.hospitalsListData = data;
        console.log('hospitalsList---', this.hospitalsListData);
      }, error => console.log('Error  getting Hospital List...'))

  }

  /* Method to get list of diseases in the form drop down*/
  getDiseasList() {
    this.claimDataService.httpGetRequest(this.baseUrl + 'diseases')
      .subscribe(data => {
        this.diseasList = data
        console.log('getDiseasList---', this.diseasList);
      }, error => console.log('Error  getting Diseas List...'))

  }

  /* Method to Initiate the policy claim */
  policyClaimInitiate(policyRegisterDetails) {
    let admissonDate = Date.parse(policyRegisterDetails.admissionDate);
    let dischargeDate = Date.parse(policyRegisterDetails.dischargedDate);
    if (admissonDate > dischargeDate) {
      this.messageService.add({ severity: 'error', detail: 'Discharge date should not be less then admission date' })
    }
    console.log('claimDetails', this.claimDetails);
    alert('Policy Register');
    const policyDetails = {
      "userId": parseInt(policyRegisterDetails.policyNo),
      "patientName": policyRegisterDetails.patientName,
      "diseaseId": parseInt(policyRegisterDetails.diseaseId),
      "admissionDate": policyRegisterDetails.admissionDate,
      "dischargedDate": policyRegisterDetails.dischargedDate,
      "hospitalId": parseInt(policyRegisterDetails.hospitalId),
      "claimAmount": policyRegisterDetails.claimAmount
    }
    this.claimDataService.httpPostRequest(this.baseUrl + 'claims', policyDetails).subscribe((response) => {
      console.log('response ', response);
      this.router.navigateByUrl("/home");
    });
  }

}

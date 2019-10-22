import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClaimDataService } from '../claim-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerclaim',
  templateUrl: './registerclaim.component.html',
  styleUrls: ['./registerclaim.component.css']
})
export class RegisterclaimComponent implements OnInit {

  hospitalsListData: any = [];
  diseasList: any;

  /*Reactive form to claim details start*/
  claimDetails = new FormGroup({
    userId: new FormControl(''),
    patientName: new FormControl(''),
    diseaseId: new FormControl('', [Validators.required]),
    admissionDate: new FormControl('', [Validators.required]),
    dischargedDate: new FormControl('', [Validators.required]),
    hospitalId: new FormControl('', [Validators.required]),
    claimAmount: new FormControl('', [Validators.required])
    // dischargeSummary: new FormControl('', [Validators.required]),
  });
  /*Reactive form to claim details end*/
  constructor(private claimDataService: ClaimDataService, private router: Router) { }

  ngOnInit() {
    this.getHospitalsList();
    this.getDiseasList();
  }

  /* To get Hospital List method start*/
  getHospitalsList() {
    this.claimDataService.getListOfHospitals()
      .subscribe(data => {
        this.hospitalsListData = data;
        console.log('hospitalsList---', this.hospitalsListData);
      }, error => console.log('Error  getting Hospital List...'))

  }
  /* To get Hospital List method end*/

  /* To get Diseas List method start*/
  getDiseasList() {
    this.claimDataService.getListOfDiseas()
      .subscribe(data => {
        this.diseasList = data
        console.log('getDiseasList---', this.diseasList);
      }, error => console.log('Error  getting Diseas List...'))

  }
  /* To get Diseas List method end*/

  /* Policy Claim Initiate method start*/
  policyClaimInitiate(policyRegisterDetails) {
    console.log('claimDetails', this.claimDetails);
    alert('Policy Register');
    const policyDetails = {
      "userId": parseInt(policyRegisterDetails.userId),
      "patientName": policyRegisterDetails.patientName,
      "diseaseId": parseInt(policyRegisterDetails.diseaseId),
      "admissionDate": policyRegisterDetails.admissionDate,
      "dischargedDate": policyRegisterDetails.dischargedDate,
      "hospitalId": parseInt(policyRegisterDetails.hospitalId),
      "claimAmount": policyRegisterDetails.claimAmount
    }
    this.claimDataService.policyClaimRegister(policyDetails).subscribe((response) => {
      console.log('response ', response);
      // this.router.navigateByUrl("/home");
    });
  }
  /* Policy Claim Initiate method end*/

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class ClaimDataService {

  constructor(private http: HttpClient) { }

  /*Claim amount service method start*/
  claimAmount(policyDetails) {
    console.log('Policy Details---Service', policyDetails);
    return this.http.post('http://10.117.189.192:9093/MedicalClaim/api/policies', policyDetails);
  }
  /*Claim amount service method end*/

  /* admin login service method start*/
  login(adminCredentials) {
    return this.http.post('http://10.117.189.254:9093/MedicalClaim/api/login', adminCredentials)
    // .map((res: Response) => res.json())
    // .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
  /* admin login service method end*/

  /*Get List of Hospitals service method start*/
  getListOfHospitals() {
    return this.http.get('http://10.117.189.47:9093/MedicalClaim/api/hospitals')
  }
  /*Get List of Hospitals service method end*/

  /*Get List of Diseas service method start*/
  getListOfDiseas() {
    return this.http.get('http://10.117.189.47:9093/MedicalClaim/api/diseases')
  }
  /*Get List of Diseas service method end*/

  /*Claim policy details service method start*/
  policyClaimRegister(policyRegisterDetails) {
    console.log('Policy Details---Service', policyRegisterDetails);
    return this.http.post('http://10.117.189.94:9093/MedicalClaim/api/claims', policyRegisterDetails);
  };
  /*Claim policy details service method end*/

  claimApprover(approverId) {
    console.log('Policy Approver---Service', approverId);
    return this.http.get('http://10.117.189.254:9093/MedicalClaim/api/approvers/' + approverId + '/claims');
  }

  getApprovalStatus(apprStatus, comment, approverId, claimId) {
    console.log(apprStatus, approverId, comment, claimId)
    console.log('Approval Status', apprStatus);
    let obj = {
      'status': apprStatus,
      'comment': comment,
      'claimId': claimId,
      'approverId': approverId
    }
    console.log('Aprrover Object', obj);
    return this.http.post('http://10.117.189.254:9093/MedicalClaim/api/approvers/', obj);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ClaimDataService {

  constructor(private http: HttpClient) { }

  /* Common post service method for all post request api calls */
  httpPostRequest(url: string, dataObject: Object) {
    console.log('dataObject', dataObject);
    console.log('url', url);
    return this.http.post(url, dataObject);
  }

  /* Common get service method for all get request api calls */
  httpGetRequest(url: string) {
    return this.http.get(url);
  }

  /* Method to set the login Id into the local storage */
  setLoginId(loginId) {
    localStorage.setItem('approverId', loginId);
  }

  /* Method to get the login Id from the local storage */
  getLoginId() {
    return localStorage.getItem('approverId');
  }

  /* Method to set the Policy No into the local storage */
  setPolicyNo(policyNo) {
    localStorage.setItem('policyNumber', policyNo);
  }

  /* Method to get the Policy No from the local storage */
  getPolicyNo() {
    return localStorage.getItem('policyNumber');
  }

}

import { Component, OnInit } from '@angular/core';
import { ClaimDataService } from '../../claim-data.service';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css']
})
export class AdminApprovalComponent implements OnInit {

  claimDetails: any;
  approverComment: String;
  constructor(private claimDataService: ClaimDataService) { }

  ngOnInit() {
    this.claimApprovalDetails(2);
  }

  /* Customer claim details method start */
  claimApprovalDetails(id) {
    console.log('Admin Data', id);
    this.claimDataService.claimApprover(id)
      .subscribe(data => {
        this.claimDetails = data;
        console.log('Claim Details', this.claimDetails);
      }, error => console.log('Error...', error));
  }
  /* Customer claim details method end */

  approvalStatus(apprStatus, claimId) {
    console.log('Approva Status', apprStatus, claimId);
    // let approverId = this.claimDetails.approverId;
    this.claimDataService.getApprovalStatus(apprStatus, this.approverComment, 2, claimId)
      .subscribe(data => {
        // this.claimDetails = data;
        // console.log('Claim Details', this.claimDetails);
        this.claimApprovalDetails(2);
      }, error => console.log('Error...', error));
  }
}

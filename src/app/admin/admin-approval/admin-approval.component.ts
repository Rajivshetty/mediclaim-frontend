import { Component, OnInit, Input } from '@angular/core';
import { ClaimDataService } from '../../services/claim-data.service';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css'],
  providers: [MessageService]
})
export class AdminApprovalComponent implements OnInit {

  claimDetails: any;
  approverComment: String;
  baseUrl: string;
  approverId: number;
  constructor(private claimDataService: ClaimDataService, private messageService: MessageService) {
    this.baseUrl = environment.baseApiUrl;
  }

  ngOnInit() {
    this.approverId = parseInt(this.claimDataService.getLoginId());
    this.claimApprovalDetails(this.approverId);
  }

  /* Customer claim details method  */
  claimApprovalDetails(id: number) {
    this.claimDataService.httpGetRequest(this.baseUrl + 'approvers/' + id + '/claims')
      .subscribe(data => {
        this.claimDetails = data;
        console.log('Claim Details', this.claimDetails);
      }, error => console.log('Error...', error));
  }

  /* Claim approval status method once admin approves the claim */
  approvalStatus(apprStatus: string, claimId: number) {
    let obj = {
      'status': apprStatus,
      'comment': this.approverComment,
      'claimId': claimId,
      'approverId': this.approverId
    }
    console.log('Approval status Object', obj);
    this.claimDataService.httpPostRequest(this.baseUrl + 'approvers', obj)
      .subscribe(data => {
        this.messageService.add({ severity: 'success', detail: data['message'] })
        console.log('response', data)
        this.claimApprovalDetails(this.approverId);
      }, error => {
        this.messageService.add({ severity: 'error', detail: error.error.message })
        console.log('Error...', error);
      })
  }

}


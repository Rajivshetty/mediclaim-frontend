import { TestBed } from '@angular/core/testing';

import { ClaimDataService } from './claim-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('ClaimDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ClaimDataService = TestBed.get(ClaimDataService);
    expect(service).toBeTruthy();
  });
});

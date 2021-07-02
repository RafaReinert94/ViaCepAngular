/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DbFirestoreService } from './db-firestore.service';

describe('Service: DbFirestore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbFirestoreService]
    });
  });

  it('should ...', inject([DbFirestoreService], (service: DbFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});

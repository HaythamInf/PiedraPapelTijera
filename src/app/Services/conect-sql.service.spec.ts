import { TestBed } from '@angular/core/testing';

import { ConectSQLService } from './conect-sql.service';

describe('ConectSQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConectSQLService = TestBed.get(ConectSQLService);
    expect(service).toBeTruthy();
  });
});

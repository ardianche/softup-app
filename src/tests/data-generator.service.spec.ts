import { TestBed } from '@angular/core/testing';

import { DataGeneratorService } from '../app/services/data-generator.service';

describe('DataGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataGeneratorService = TestBed.get(DataGeneratorService);
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { FeedsProvidersLoaderService } from './feeds-providers-loader.service';

describe('FeedsProvidersLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedsProvidersLoaderService]
    });
  });

  it('should be created', inject([FeedsProvidersLoaderService], (service: FeedsProvidersLoaderService) => {
    expect(service).toBeTruthy();

  }));
});

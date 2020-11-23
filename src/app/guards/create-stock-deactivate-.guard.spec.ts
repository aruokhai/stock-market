import { TestBed, async, inject } from '@angular/core/testing';

import { CreateStockDeactivateGuard } from './create-stock-deactivate.guard';

describe('CreateStockDeactivateGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateStockDeactivateGuard]
    });
  });

  it('should ...', inject([CreateStockDeactivateGuard], (guard: CreateStockDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

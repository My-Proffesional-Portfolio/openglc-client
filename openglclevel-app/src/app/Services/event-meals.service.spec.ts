import { TestBed } from '@angular/core/testing';

import { EventMealsService } from './event-meals.service';

describe('EventMealsService', () => {
  let service: EventMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FlippinNotesService } from '../app/services/flippin-notes.service';

describe('FlippinNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlippinNotesService = TestBed.get(FlippinNotesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CreditService } from './credit.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

describe('CreditService', () => {
  let service: CreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
@Injectable({
  providedIn: 'root'
})
export class CreditServiceSpec {
  constructor(private _http:HttpClient) { }
}

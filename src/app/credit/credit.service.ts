import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreditService {
  listCredits : any[]=[];
  usersUrl = 'http://localhost:8084/moneylend/showCredit';
  usersUrl2 = 'http://localhost:8084/moneylend/MensualityCalculation?id=';
  usersUrl3 = 'http://localhost:8084/moneylend/GainCalculation?id=';



  constructor(private _http: HttpClient) {
  }

  getUsersName() {
    return this._http.get(this.usersUrl);
  }

  getGain(id:number) {
    return this._http.get(this.usersUrl3+id);
  }


  calculMensualite2(id: number): Promise<string> {

    return this._http.get(`http://localhost:8084/moneylend/MensualityCalculation?id=${id}`, { responseType: 'text' })
      .toPromise()
      // @ts-ignore
      .then(response => response.trim())
      .catch(error => {
        console.log(error);
        return '';
      });
  }

  calculGain(id: number): Promise<string> {

    return this._http.get(`http://localhost:8084/moneylend/GainCalculation?id=${id}`, { responseType: 'text' })
      .toPromise()
      // @ts-ignore
      .then(response => response.trim())
      .catch(error => {
        console.log(error);
        return '';
      });
  }

  calculTotal(id: number): Promise<string> {

    return this._http.get(`http://localhost:8084/moneylend/TotalCalculation?id=${id}`, { responseType: 'text' })
      .toPromise()
      // @ts-ignore
      .then(response => response.trim())
      .catch(error => {
        console.log(error);
        return '';
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {CreditService} from "./credit.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})


export class CreditComponent implements OnInit {
  listCredits: any[] = [];
  private idCredit !: number;
  private sub: Subscription | undefined;

  constructor(public _service: CreditService,private route: ActivatedRoute
  ) {
  }

  mensuality !: any;
  gain !: any;
  total !: any;



  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.idCredit = +params['id']
    });


    this.retrieveMensuality(this.idCredit);
    console.log()

    this.retrieveGain(this.idCredit);
    console.log()

    this.retrieveTotal(this.idCredit);
    console.log()
  }



  retrieveMensuality(id: number): void {
    this._service.calculMensualite2(id)
      .then(mensuality => {
        this.mensuality = mensuality;
        console.log('mensuality: ' + this.mensuality);
      })
      .catch(error => {
        console.log(error);
      });
  }

  retrieveGain(id: number): void {
    this._service.calculGain(id)
      .then(gain => {
        this.gain = gain;
        console.log('gain: ' + this.gain);
      })
      .catch(error => {
        console.log(error);
      });
  }

  retrieveTotal(id: number): void {
    this._service.calculTotal(id)
      .then(total => {
        this.total = total;
        console.log('total: ' + this.total);
      })
      .catch(error => {
        console.log(error);
      });
  }


}

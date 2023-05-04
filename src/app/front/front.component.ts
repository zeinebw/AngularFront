import { Component, OnInit } from '@angular/core';
import {CreditService} from "../credit/credit.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  listCredits : any[]=[];
  constructor(private _service:CreditService, private router:Router) { }


  ngOnInit(): void {
    this._service.getUsersName().subscribe(
      (res) =>{
      console.log(res);
      this.listCredits= Object.values(res)});
  }

c : boolean=false ;
  click() {
    this.c=true;
    return this.c
  }
}

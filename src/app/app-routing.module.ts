import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditComponent} from "./credit/credit.component";
import {FrontComponent} from "./front/front.component";

const routes: Routes = [
{ path: 'credit/:id', component:CreditComponent },
  { path: 'front', component:FrontComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
   { path: 'account', component: AccountComponent },
  { path: 'bank', component: BankComponent },
  { path: '', redirectTo: '/account', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/account' } // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

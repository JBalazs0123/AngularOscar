import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinnersComponent } from './winners.component';

const routes: Routes = [
  { path: '', component: WinnersComponent },
  { path: 'successful', loadChildren: () => import('./successful/successful.module').then(m => m.SuccessfulModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinnersRoutingModule { }

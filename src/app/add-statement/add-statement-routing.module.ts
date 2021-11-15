import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStatementPage } from './add-statement.page';

const routes: Routes = [
  {
    path: '',
    component: AddStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStatementPageRoutingModule {}

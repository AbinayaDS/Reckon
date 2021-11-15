import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndividualPage } from './individual.page';

const routes: Routes = [
  {
    path: '',
    component: IndividualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndividualPageRoutingModule {}

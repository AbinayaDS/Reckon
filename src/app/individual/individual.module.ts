import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndividualPageRoutingModule } from './individual-routing.module';

import { IndividualPage } from './individual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndividualPageRoutingModule
  ],
  declarations: [IndividualPage]
})
export class IndividualPageModule {}

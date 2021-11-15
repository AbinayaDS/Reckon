import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStatementPageRoutingModule } from './add-statement-routing.module';

import { AddStatementPage } from './add-statement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStatementPageRoutingModule
  ],
  declarations: [AddStatementPage]
})
export class AddStatementPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotedetailPageRoutingModule } from './dishdetail-routing.module';

import { QuotedetailPage } from './dishdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotedetailPageRoutingModule
  ],
  declarations: [QuotedetailPage]
})
export class QuotedetailPageModule {}

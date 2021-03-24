import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotedetailPage } from './dishdetail.page';

const routes: Routes = [
  {
    path: '',
    component: QuotedetailPage
  },
  {
    path: ':quoteId',
    component: QuotedetailPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotedetailPageRoutingModule {}

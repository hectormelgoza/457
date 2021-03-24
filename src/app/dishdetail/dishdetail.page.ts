import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quotes } from 'src/assets/data/quotes.interface';
import { QuotesService } from '../service/quotes.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class QuotedetailPage implements OnInit {
  id: string;
  quote: Quotes;
  constructor(private route: ActivatedRoute,
    private quotesService: QuotesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('dishId');
    console.log(this.id);
    this.quote = this.quotesService.getQuote(this.id);
    console.log(this.quote);
  }

}

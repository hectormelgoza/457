import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import quotes from 'src/assets/data/quotes';
import { Quotes } from 'src/assets/data/quotes.interface';
import { QuotesService } from '../service/quotes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  quoteCollection: {category: string, quotes: Quotes[]}[];

  constructor(
    private alertController: AlertController,
    private quoteService: QuotesService
  ) {}

  ngOnInit(){
    this.quoteCollection = quotes;
  }

  async onAddToFavorite(SelectedQuote: Quotes){
    const alert = await this.alertController.create({
      header: 'Add Quote',
      subHeader: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.quoteService.addQuoteToFavorite(SelectedQuote);
          }
        },
        {
          text: 'Not Confirm',
          role: 'cancel',
          handler: () => {
            console.log('cancelled')
          }
        }
      ]
    });
    await alert.present();
  }

  isFavorite(quote: Quotes){
    return this.quoteService.isQuoteFavorite(quote);
  }

  onRemoveFavorite(quote: Quotes){
    this.quoteService.removeQuoteFromFavorite(quote);
  }
}

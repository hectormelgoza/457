import { Injectable } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private favoriteQuotes: Quotes[] = [];

  constructor() { }

  addQuoteToFavorite(quote: Quotes){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  getFavoriteQuote(){
    return this.favoriteQuotes.slice();
  }

  getQuote(id: string){
    return {...this.favoriteQuotes.find(p => p.id === id)}
  }

  removeQuoteFromFavorite(quote: Quotes){
    const position = this.favoriteQuotes.findIndex( (dishEl: Quotes) => {
      return dishEl.id === quote.id;
    });

    
    this.favoriteQuotes.splice(position, 1)
  }

  isQuoteFavorite(quote: Quotes){
    return this.favoriteQuotes.find((dishEl: Quotes) => {
      return dishEl.id === quote.id;
    });
  }
}

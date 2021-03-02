import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dishes } from 'src/assets/data/dishes.interface';
import { DishesService } from '../service/dishes.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage implements OnInit {
  id: string;
  dish: Dishes;
  constructor(private route: ActivatedRoute,
    private dishesService: DishesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('dishId');
    //console.log(this.id);
    this.dish = this.dishesService.getDish(this.id);
    console.log(this.dish);
  }

}

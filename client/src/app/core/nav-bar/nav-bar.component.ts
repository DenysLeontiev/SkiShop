import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { Basket, BasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  basket$: Observable<Basket | null> = of(null) ;
  constructor(public basketService: BasketService) { }
}

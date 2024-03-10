import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';
import { BasketService } from 'src/app/basket/basket.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  quantity: number = 1; // selected
  quantityInBasket: number = 0;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute, 
    private bcService: BreadcrumbService,
    private basketService: BasketService) {
      this.bcService.set('@productDetails', ' ')
    }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.shopService.getProduct(+id).subscribe({
      next: product => {
        this.product = product;
        this.bcService.set('@productDetails', product.name);
        this.basketService.basket$.pipe(take(1)).subscribe((basket) => {
          const item = basket?.items.find(x => x.id === +id);
          if(item) {
            this.quantity = item.quantity;
            this.quantityInBasket = item.quantity;
          }
        })
      },
      error: error => console.log(error)
    })
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product!, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}

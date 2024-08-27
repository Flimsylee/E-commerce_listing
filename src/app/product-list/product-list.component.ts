import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'

})
export class ProductListComponent {
  ProductNames = "Bag"
  names = ["Puma", "Fendi", "gucci", "bottega", "Nike",]
  products = [
    { id:1 ,
      name: "fendi",
      price: "$500",
      image_url: "/IMG_5628.JPG"
    },
    {
      id:2,
      name: "Puma",
      price: "$1200",
      image_url: "/IMG_8747.JPG"
    }
  ]
page = 1

}

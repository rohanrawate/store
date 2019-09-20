import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  constructor() { }

  @Input() product;

  ngOnInit() {
    console.log(this.product);
  }

}

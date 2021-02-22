import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Output() openProduct = new EventEmitter<ProductModel>();

  constructor() { }

  onShowMore() {
    this.openProduct.emit(this.product);
  }
}

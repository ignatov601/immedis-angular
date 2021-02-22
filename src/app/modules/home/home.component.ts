import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/core/services/data.service';
import { ProductModel } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Array<ProductModel> = [];
  selectedProduct: ProductModel | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllData<Array<ProductModel>>().subscribe(res => {
      this.data = [...res];
    });
  }

  openProduct(product: ProductModel) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}

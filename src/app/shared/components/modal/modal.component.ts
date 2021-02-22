import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  rating: Array<boolean> = [];
  selectedSize: string;
  isSocialIconsShown: boolean = false;
  innerSize: number;

  @Input() product: ProductModel;
  @Output() shouldCloseModal = new EventEmitter();

  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
    this.selectedSize = this.product.size;
    this.calculateRating(this.product.rating);
  }

  @HostListener('window:resize')
  onResize() {
    this.innerSize = window.innerWidth;
  }

  onClose() {
    this.shouldCloseModal.emit();
  }

  toggleSocialIcons(isShown: boolean) {
    this.isSocialIconsShown = isShown;
  }

  changeRating(index: number) {
    this.calculateRating(index);
  }

  changeSize(newSize: string) {
    this.selectedSize = newSize;
  }

  private calculateRating(index: number) {
    this.rating = Array(5).fill(false).fill(true, 0, index);
  }
}

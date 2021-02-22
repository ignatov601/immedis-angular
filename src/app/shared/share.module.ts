import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDesktopComponent } from './components/modal/modal-desktop/modal-desktop.component';
import { ModalTabletComponent } from './components/modal/modal-tablet/modal-tablet.component';
import { ModalMobileComponent } from './components/modal/modal-mobile/modal-mobile.component';

@NgModule({
  declarations: [
    ProductComponent,
    ModalComponent,
    ModalDesktopComponent,
    ModalTabletComponent,
    ModalMobileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ModalComponent
  ],
})
export class ShareModule { }

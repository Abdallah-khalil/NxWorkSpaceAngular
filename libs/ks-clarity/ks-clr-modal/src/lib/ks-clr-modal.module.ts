import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal.component';

import { SharedUiElementsModule } from '@demo-prio-workspace/shared/ui-elements';
import { UtilInventoryModule } from '@demo-prio-workspace/ks-clarity/util-inventory';

@NgModule({
  imports: [
    CommonModule,
    SharedUiElementsModule,
    UtilInventoryModule,
    RouterModule.forChild([
      // { path: '', pathMatch: 'full', redirectTo: 'modal' },
      {
        path: '',
        component: ModalComponent
      }
    ])
  ],
  declarations: [
    ModalComponent
  ]
})
export class KsClrModalModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUiElementsModule } from '@demo-prio-workspace/shared/ui-elements';
import { DataGridComponent } from './data-grid.component';
import { UtilInventoryModule } from '@demo-prio-workspace/ks-clarity/util-inventory';

@NgModule({
  imports: [
    CommonModule,
    SharedUiElementsModule,
    UtilInventoryModule,
    RouterModule.forChild([
      {
        path: '',
        component: DataGridComponent
      }
    ])
  ],
  declarations: [DataGridComponent]
})
export class DataGridModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUiElementsModule } from '@demo-prio-workspace/shared/ui-elements';
import { UtilInventoryModule } from '@demo-prio-workspace/ks-clarity/util-inventory';
import { WizardComponent } from './wizard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiElementsModule,
    UtilInventoryModule,
    RouterModule.forChild([
      {
        path: '',
        component: WizardComponent
      }
    ])
  ],
  declarations: [WizardComponent],
  exports: [WizardComponent],
})
export class KsClrWizardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LabelAndBadgeComponent } from './label-and-badge.component';
import { SharedUiElementsModule } from '@demo-prio-workspace/shared/ui-elements';
@NgModule({
  imports: [
    CommonModule,
    SharedUiElementsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LabelAndBadgeComponent
      }
    ])
  ],
  declarations: [LabelAndBadgeComponent]
})
export class LabelAndBadgeModule {}

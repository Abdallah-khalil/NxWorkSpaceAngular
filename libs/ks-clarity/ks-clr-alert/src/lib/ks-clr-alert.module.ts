import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts.component';
import { SharedUiElementsModule } from '@demo-prio-workspace/shared/ui-elements';

@NgModule({
  imports: [
    CommonModule,
    SharedUiElementsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      {
        path: 'overview',
        component: AlertsComponent
      }
    ])
  ],
  declarations: [AlertsComponent]
})
export class KsClrAlertModule {}

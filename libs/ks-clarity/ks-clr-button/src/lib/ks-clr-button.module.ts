import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUiElementsModule } from '@demo-prio-workspace/shared/ui-elements';
import { ButtonsComponent } from './buttons.component';
import { ButtonGroupsComponent } from './button-groups.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiElementsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      {
        path: 'overview',
        component: ButtonsComponent
      },
      {
        path: 'button-groups',
        component: ButtonGroupsComponent
      }
    ])
  ],
  declarations: [ButtonsComponent, ButtonGroupsComponent]
})
export class KsClrButtonModule {}

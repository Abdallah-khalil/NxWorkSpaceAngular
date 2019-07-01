import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedUiElementsModule } from '@demo-prio-workspace/shared/ui-elements';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, SharedUiElementsModule, RouterModule],
  declarations: [MainLayoutComponent, HeaderComponent],
  exports: [MainLayoutComponent]
})
export class LayoutModule {}

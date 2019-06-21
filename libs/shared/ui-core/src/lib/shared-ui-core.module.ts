import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule, ClrIconModule } from '@clr/angular';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, ClarityModule, ClrIconModule],
  declarations: [AlertComponent, HeaderComponent],
  exports: [ClarityModule, ClrIconModule, AlertComponent, HeaderComponent]
})
export class SharedUiCoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ColorFilterComponent } from './color-filter/color-filter.component';

@NgModule({
  declarations: [ColorFilterComponent],
  imports: [CommonModule, ClarityModule],
  exports: [ColorFilterComponent]
})
export class UtilInventoryModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrioButtonComponent } from './prio-button/prio-button.component';
import { PrioInputComponent } from './prio-input/prio-input.component';
@NgModule({
  imports: [CommonModule, ClarityModule, FormsModule, ReactiveFormsModule],
  exports: [ClarityModule, FormsModule, ReactiveFormsModule, PrioButtonComponent, PrioInputComponent],
  declarations: [PrioButtonComponent, PrioInputComponent]
})
export class SharedUiElementsModule {}

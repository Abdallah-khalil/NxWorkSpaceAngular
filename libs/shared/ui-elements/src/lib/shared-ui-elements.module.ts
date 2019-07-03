import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ClarityModule, FormsModule, ReactiveFormsModule],
  exports: [ClarityModule, FormsModule, ReactiveFormsModule]
})
export class SharedUiElementsModule {}

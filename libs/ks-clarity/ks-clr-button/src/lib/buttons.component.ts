import { Component, OnInit } from '@angular/core';
import { ClrLoadingState, ClrButton, ClrLoadingButton } from '@clr/angular';

@Component({
  selector: 'ks-clarity-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {
  public validateState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public validateStates: ClrLoadingState[] = [
    ClrLoadingState.DEFAULT, ClrLoadingState.DEFAULT, ClrLoadingState.DEFAULT, ClrLoadingState.DEFAULT, ClrLoadingState.DEFAULT
  ]
  public submitState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public validateSmState = false;
  public submitSmState: ClrLoadingState = ClrLoadingState.DEFAULT;
  loadingState: ClrLoadingState = ClrLoadingState.DEFAULT;
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  display: number[];

  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrButton: ClrButton;
  private aCLrLoadingButton: ClrLoadingButton;

  constructor() {
    this.display = this.numbers;
  }

  changeNumbers() {
    this.display.length = 0;
    for (const num of this.numbers) {
      console.log('num: ', num);
      this.display.push(
        this.numbers[Math.floor(Math.random() * this.numbers.length)]
      );
    }
    console.log(this.display);
  }
  onClick($event){
    this.loadingState = ClrLoadingState.LOADING;
    setTimeout(() => {
    this.loadingState = ClrLoadingState.SUCCESS;
    }, 1000);
    console.log($event);
  }
  validateDemo() {
    this.validateState = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.validateState = ClrLoadingState.SUCCESS;
    }, 1500);
  }
  validateDemoCustomized(validateState, index) {
    this.validateStates[index] = validateState;
    this.validateStates[index] = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.validateStates[index] = ClrLoadingState.SUCCESS;
    }, 1500);
  }

  submitDemo() {
    this.submitState = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.submitState = ClrLoadingState.DEFAULT;
    }, 1500);
  }

  validateSmDemo() {
    this.validateSmState = true;
    setTimeout(() => {
      this.validateSmState = false;
    }, 1500);
  }

  submitSmDemo() {
    this.submitSmState = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.submitSmState = ClrLoadingState.DEFAULT;
    }, 1500);
  }
  print(event) {
    console.log('event', event);
  }
}

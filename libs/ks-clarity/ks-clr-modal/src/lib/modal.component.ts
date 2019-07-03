import { Component, OnInit } from '@angular/core';
import { ClrModal } from '@clr/angular';

@Component({
  selector: 'ks-clr-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  private aClrModal: ClrModal;
  opened1 = false;
  opened2 = false;
  small = false;
  large = false;
  extraLarge = false;

  constructor() { }

  ngOnInit() {
  }

}

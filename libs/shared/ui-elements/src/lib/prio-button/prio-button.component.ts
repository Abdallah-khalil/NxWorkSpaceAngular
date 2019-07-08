import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'prio-button',
  templateUrl: './prio-button.component.html',
  styleUrls: ['./prio-button.component.scss']
})

export class PrioButtonComponent implements OnInit {

  inputFocus = false;
  constructor() { }

  ngOnInit() {

  }
}

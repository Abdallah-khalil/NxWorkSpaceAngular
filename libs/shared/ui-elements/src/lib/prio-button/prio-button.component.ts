import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { columnStateFactory } from '@clr/angular/data/datagrid/providers/column-state.provider';
import { style } from '@angular/animations';
import { ClrLoadingState } from '@clr/angular';
@Component({
// tslint:disable-next-line: component-selector
  selector: 'prio-button',
  templateUrl: './prio-button.component.html',
  styleUrls: ['./prio-button.component.scss']
})

export class PrioButtonComponent implements OnInit {

  @Input() style = 'solid' ;  //solid || outline || flat
  @Input() type = 'btn-primary' ;  //btn-primary || btn-secondary || btn-danger, ...etc
  @Input() size = 'normal' ;   //normal || small
  @Input() isBlock = false ;  // if true: button take dislay as block
  @Input() isIcon = false ;  // if true: turns button view to icon (also if no text exists) and it takes class btn-icon
  @Input() label = '' ;    //buttontext
  @Input() isDisabled = false;
  // @Input() iconShape = '';
  @Input() loadingState = ClrLoadingState.DEFAULT ;  // loading state
  @Output() Click = new EventEmitter();   //click event
  constructor() { }

  ngOnInit() {
  }
  onClick($event) {
    this.Click.emit($event);
  }
}

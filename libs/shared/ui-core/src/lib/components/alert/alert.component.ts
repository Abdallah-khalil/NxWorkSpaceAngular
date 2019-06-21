import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prio-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() public appLevelAlertFlag: boolean;
  @Input() public isAlertSmallFlag: boolean;
  @Input() public type: 'error' | 'warning' | 'info' | 'success';
  @Input() public placement: string;
  @Input() public icon: string;
  @Input() public message: string;
  constructor() {}

  ngOnInit() {}
}

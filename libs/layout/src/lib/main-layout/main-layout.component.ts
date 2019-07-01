import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prio-main-layout',
  templateUrl: './main-layout.component.html',
  styles: [
    `
      .main-container {
        height: auto;
        padding-top: 0;
      }
      .content-area {
        overflow-y: hidden;
      }
    `
  ]
})
export class MainLayoutComponent implements OnInit {
  public readonly links = [
    { path: 'alerts', title: 'Alerts' },
    { path: 'badges', title: 'Badges' },
    { path: 'buttons', title: 'Buttons' },
    { path: 'cards', title: 'Cards' },
    { path: 'checkboxes', title: 'Checkboxes' },
    { path: 'colors', title: 'Colors' },
    { path: 'datagrids', title: 'Datagrid' },
    { path: 'drag-and-drop', title: 'Drag and Drop' },
    { path: 'datepicker', title: 'Datepicker' },
    { path: 'dropdowns', title: 'Dropdowns' },
    { path: 'forms', title: 'Forms' },
    { path: 'iconography', title: 'Iconography' },
    { path: 'inputs', title: 'Inputs' },
    { path: 'labels', title: 'Labels' },
    { path: 'lists', title: 'Lists' },
    { path: 'login', title: 'Login' },
    { path: 'modals', title: 'Modals' },
    { path: 'passwords', title: 'Passwords' },
    { path: 'progress-bars', title: 'Progress Bars' },
    { path: 'radios', title: 'Radios' },
    { path: 'selects', title: 'Selects' },
    { path: 'signposts', title: 'Signposts' },
    { path: 'spinners', title: 'Spinners' },
    { path: 'stackviews', title: 'Stack Views' },
    { path: 'tables', title: 'Tables' },
    { path: 'tabs', title: 'Tabs' },
    { path: 'textareas', title: 'Textareas' },
    { path: 'tooltips', title: 'Tooltips' },
    { path: 'toggle', title: 'Toggle' },
    { path: 'treeview', title: 'Tree View' },
    { path: 'typography', title: 'Typography' },
    { path: 'vertical-nav', title: 'Vertical Nav' },
    { path: 'wizards', title: 'Wizards' }
  ];
  constructor() {}

  ngOnInit() {}
}

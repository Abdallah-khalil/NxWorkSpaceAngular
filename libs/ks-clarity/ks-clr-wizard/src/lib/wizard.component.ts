import { Component, ViewChild, OnInit } from '@angular/core';
import {
  ClrWizard,
  ClrWizardButton,
  ClrWizardCustomTags,
  ClrWizardHeaderAction,
  ClrWizardPageButtons,
  ClrWizardPageHeaderActions,
  ClrWizardPageNavTitle,
  ClrWizardPageTitle,
  ClrWizardStepnav,
} from '@clr/angular';
@Component({
  selector: 'ks-clr-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
/**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrWizardStepnav: ClrWizardStepnav;
  private aClrWizardButton: ClrWizardButton;
  private aClrWizardHeaderAction: ClrWizardHeaderAction;
  private aClrWizardCustomTags: ClrWizardCustomTags;
  private aClrWizardPageTitle: ClrWizardPageTitle;
  private aClrWizardPageNavTitle: ClrWizardPageNavTitle;
  private aClrWizardPageButtons: ClrWizardPageButtons;
  private aClrWizardPageHeaderActions: ClrWizardPageHeaderActions;

  // Form Wizard Demo
  @ViewChild('formWizard', { static: false })
  formWizard: ClrWizard;
  formOpen = false;
  formModel = { name: '', favorite: '', number: '' };

  // inlineWizard demo
  @ViewChild('inlineWizard', { static: false })
  inlineWizard: ClrWizard;
  inlineOpen = false;
  ngOnInit() {
  }

}

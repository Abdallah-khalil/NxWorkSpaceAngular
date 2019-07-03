import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent, LayoutModule } from '@demo-prio-workspace/layout';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/alerts/overview',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'button',
        loadChildren: () =>
          import('@demo-prio-workspace/ks-clarity/ks-clr-button').then(
            m => m.KsClrButtonModule
          )
      },
      {
        path: 'alerts',
        loadChildren: () =>
          import('@demo-prio-workspace/ks-clarity/ks-clr-alert').then(
            m => m.KsClrAlertModule
          )
      },
    
      {
        path: 'label-badge',
        loadChildren: () =>
          import('@demo-prio-workspace/ks-clarity/label-and-badge').then(
            m => m.LabelAndBadgeModule
          )
      },
      {
        path: 'data-grid',
        loadChildren: () =>
          import('@demo-prio-workspace/ks-clarity/data-grid').then(
            m => m.DataGridModule
          )
      },
      {
        path: 'modal',
        loadChildren: () =>
          import('@demo-prio-workspace/ks-clarity/ks-clr-modal').then(
            m => m.KsClrModalModule
          )
      },
      {
        path: 'wizard',
        loadChildren: () =>
          import('@demo-prio-workspace/ks-clarity/ks-clr-wizard').then(
            m => m.KsClrWizardModule
          )
      }
    ]
  },

  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/alerts/overview', pathMatch: 'full' }
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

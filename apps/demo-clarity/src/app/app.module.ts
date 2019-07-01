import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from '@demo-prio-workspace/layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/button',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'button',
        loadChildren: () =>
          // import('../../../../libs/ks-clarity/ks-clr-button/src/lib/ks-clarity-ks-clr-button.module').then(
          //   m => m.KsClarityKsClrButtonModule
          // )
      }
    ]
  },

  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/button', pathMatch: 'full' }
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

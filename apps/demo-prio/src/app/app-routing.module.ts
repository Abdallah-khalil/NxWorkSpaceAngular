import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@demo-prio-workspace/feature-login').then(
        m => m.FeatureLoginModule
      )
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {}

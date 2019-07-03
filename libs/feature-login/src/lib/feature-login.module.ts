import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeatureLoginComponent } from './feature-login/feature-login.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
              path: '',
              component: FeatureLoginComponent
            }
          ])
    ],
    exports: [],
    
    declarations: [FeatureLoginComponent],
    providers: [],
})
export class FeatureLoginModule { }

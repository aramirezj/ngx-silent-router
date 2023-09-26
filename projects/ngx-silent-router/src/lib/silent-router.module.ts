import { NgModule } from '@angular/core';
import { NgxSilentRouterComponent } from './silent-router.component';
import { SilentRouter } from './silent-router.service';



@NgModule({
  declarations: [
    NgxSilentRouterComponent
  ],
  providers: [SilentRouter],
  exports: [NgxSilentRouterComponent]

})
export class NgxSilentRouterModule { }

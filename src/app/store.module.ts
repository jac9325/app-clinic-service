import { NgModule } from '@angular/core';
import { StoreModule as nxrStoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    nxrStoreModule.forRoot({
      // Reducers
    })
  ]
})

export class StoreModule { }

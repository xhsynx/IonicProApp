import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MapsPage } from './maps.page';
import { MapsPageRoutingModule } from './maps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapsPageRoutingModule
  ],
  declarations: [
    MapsPage,
  ]
})
export class MapsPageModule { }

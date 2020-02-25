import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';
import {SpeakerListPageModule} from '../speaker-list/speaker-list.module';
import { MapsPageModule } from '../maps/maps.module'
import { UserPageModule } from '../user/user.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SpeakerListPageModule,
    MapsPageModule,
    UserPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

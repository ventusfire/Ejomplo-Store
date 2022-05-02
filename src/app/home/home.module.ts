import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './componentes/banner/banner.component';
import { HomeComponent } from './componentes/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { SwiperConfigInterface, SWIPER_CONFIG, SwiperModule} from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
   direction: 'horizontal'
 };

@NgModule({
   declarations: [
      BannerComponent,
      HomeComponent
   ],
   imports: [
       HomeRoutingModule,
       CommonModule,
       SharedModule,
       SwiperModule
   ],
   providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
   ]
})

export class HomeModule {

}
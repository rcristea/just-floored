// .------.
// |г.--. |
// | :(): |
// | ()() |
// | '--'г|
// '------'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FloorsComponent } from './components/pages/floors/floors.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { LaminateP1Component } from './components/pages/laminate/laminate-p1/laminate-p1.component';
import { LaminateP2Component } from './components/pages/laminate/laminate-p2/laminate-p2.component';
import { LaminateP3Component } from './components/pages/laminate/laminate-p3/laminate-p3.component';
import { LaminateP4Component } from './components/pages/laminate/laminate-p4/laminate-p4.component';
import { VinylP1Component } from './components/pages/vinyl/vinyl-p1/vinyl-p1.component';
import { VinylP2Component } from './components/pages/vinyl/vinyl-p2/vinyl-p2.component';
import { VinylP3Component } from './components/pages/vinyl/vinyl-p3/vinyl-p3.component';
import { EngineeredComponent } from './components/pages/engineered/engineered.component';
import { EngineeredAcaciaComponent } from './components/pages/engineered/engineered-acacia/engineered-acacia.component';
import { EngineeredBirchComponent } from './components/pages/engineered/engineered-birch/engineered-birch.component';
import { EngineeredHickoryComponent } from './components/pages/engineered/engineered-hickory/engineered-hickory.component';
import { LaminateAcaciaComponent } from './components/pages/laminate/laminate-acacia/laminate-acacia.component';
import { LaminateHickoryComponent } from './components/pages/laminate/laminate-hickory/laminate-hickory.component';
import { LaminateSingleWidthComponent } from './components/pages/laminate/laminate-single-width/laminate-single-width.component';
import { LaminateRandomWidthComponent } from './components/pages/laminate/laminate-random-width/laminate-random-width.component';
import { LaminateValueCollectionComponent } from './components/pages/laminate/laminate-value-collection/laminate-value-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomePageComponent,
    FloorsComponent,
    ServicesComponent,
    LaminateP1Component,
    LaminateP2Component,
    LaminateP3Component,
    LaminateP4Component,
    VinylP1Component,
    VinylP2Component,
    VinylP3Component,
    EngineeredComponent,
    EngineeredAcaciaComponent,
    EngineeredBirchComponent,
    EngineeredHickoryComponent,
    LaminateAcaciaComponent,
    LaminateHickoryComponent,
    LaminateSingleWidthComponent,
    LaminateRandomWidthComponent,
    LaminateValueCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

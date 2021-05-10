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
import { VinylLvpComponent } from './components/pages/vinyl/vinyl-lvp/vinyl-lvp.component';
import { VinylWpcP1Component } from './components/pages/vinyl/vinyl-wpc/vinyl-wpc-p1/vinyl-wpc-p1.component';
import { VinylWpcP2Component } from './components/pages/vinyl/vinyl-wpc/vinyl-wpc-p2/vinyl-wpc-p2.component';
import { VinylWpcP3Component } from './components/pages/vinyl/vinyl-wpc/vinyl-wpc-p3/vinyl-wpc-p3.component';
import { VinylWf6Component } from './components/pages/vinyl/vinyl-wf6/vinyl-wf6.component';
import { VinylWf8Component } from './components/pages/vinyl/vinyl-wf8/vinyl-wf8.component';
import { VinylWf9Component } from './components/pages/vinyl/vinyl-wf9/vinyl-wf9.component';
import { AcaciaCologneAcr042Component } from './components/pages/engineered/floors/acacia-cologne-acr042/acacia-cologne-acr042.component';
import { AcaciaLisbonAcr044Component } from './components/pages/engineered/floors/acacia-lisbon-acr044/acacia-lisbon-acr044.component';
import { CostaBeachComponent } from './components/pages/engineered/floors/costa-beach/costa-beach.component';
import { HickoryKlamathHir002Component } from './components/pages/engineered/floors/hickory-klamath-hir002/hickory-klamath-hir002.component';
import { HickoryMojaveHir001Component } from './components/pages/engineered/floors/hickory-mojave-hir001/hickory-mojave-hir001.component';
import { HickoryOmakHir003Component } from './components/pages/engineered/floors/hickory-omak-hir003/hickory-omak-hir003.component';
import { SantaBarbaraBeachComponent } from './components/pages/engineered/floors/santa-barbara-beach/santa-barbara-beach.component';
import { Gt102PatinaOakComponent } from './components/pages/laminate/floors/gt102-patina-oak/gt102-patina-oak.component';
import { Gt105SnowOakComponent } from './components/pages/laminate/floors/gt105-snow-oak/gt105-snow-oak.component';
import { Gt108TawnyOakComponent } from './components/pages/laminate/floors/gt108-tawny-oak/gt108-tawny-oak.component';
import { Gt201CoffeeComponent } from './components/pages/laminate/floors/gt201-coffee/gt201-coffee.component';
import { Gt202ReddishComponent } from './components/pages/laminate/floors/gt202-reddish/gt202-reddish.component';
import { Gt203ChocolateComponent } from './components/pages/laminate/floors/gt203-chocolate/gt203-chocolate.component';
import { Gt204GreyComponent } from './components/pages/laminate/floors/gt204-grey/gt204-grey.component';

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
    VinylLvpComponent,
    VinylWpcP1Component,
    VinylWpcP2Component,
    VinylWpcP3Component,
    VinylWf6Component,
    VinylWf8Component,
    VinylWf9Component,
    AcaciaCologneAcr042Component,
    AcaciaLisbonAcr044Component,
    CostaBeachComponent,
    HickoryKlamathHir002Component,
    HickoryMojaveHir001Component,
    HickoryOmakHir003Component,
    SantaBarbaraBeachComponent,
    Gt102PatinaOakComponent,
    Gt105SnowOakComponent,
    Gt108TawnyOakComponent,
    Gt201CoffeeComponent,
    Gt202ReddishComponent,
    Gt203ChocolateComponent,
    Gt204GreyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

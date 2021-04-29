import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { EngineeredAcaciaComponent } from './components/pages/engineered/engineered-acacia/engineered-acacia.component';
import { EngineeredBirchComponent } from './components/pages/engineered/engineered-birch/engineered-birch.component';
import { EngineeredHickoryComponent } from './components/pages/engineered/engineered-hickory/engineered-hickory.component';
import { EngineeredComponent } from './components/pages/engineered/engineered.component';
import { FloorsComponent } from './components/pages/floors/floors.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LaminateAcaciaComponent } from './components/pages/laminate/laminate-acacia/laminate-acacia.component';
import { LaminateHickoryComponent } from './components/pages/laminate/laminate-hickory/laminate-hickory.component';
import { LaminateP1Component } from './components/pages/laminate/laminate-p1/laminate-p1.component';
import { LaminateP2Component } from './components/pages/laminate/laminate-p2/laminate-p2.component';
import { LaminateP3Component } from './components/pages/laminate/laminate-p3/laminate-p3.component';
import { LaminateP4Component } from './components/pages/laminate/laminate-p4/laminate-p4.component';
import { LaminateRandomWidthComponent } from './components/pages/laminate/laminate-random-width/laminate-random-width.component';
import { LaminateSingleWidthComponent } from './components/pages/laminate/laminate-single-width/laminate-single-width.component';
import { LaminateValueCollectionComponent } from './components/pages/laminate/laminate-value-collection/laminate-value-collection.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { VinylP1Component } from './components/pages/vinyl/vinyl-p1/vinyl-p1.component';
import { VinylP2Component } from './components/pages/vinyl/vinyl-p2/vinyl-p2.component';
import { VinylP3Component } from './components/pages/vinyl/vinyl-p3/vinyl-p3.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'floors', component: FloorsComponent },
  { path: 'engineered', component: EngineeredComponent },
  { path: 'engineered/acacia', component: EngineeredAcaciaComponent },
  { path: 'engineered/birch', component: EngineeredBirchComponent },
  { path: 'engineered/hickory', component: EngineeredHickoryComponent },
  { path: 'laminate/page/1', component: LaminateP1Component },
  { path: 'laminate/page/2', component: LaminateP2Component },
  { path: 'laminate/page/3', component: LaminateP3Component },
  { path: 'laminate/page/4', component: LaminateP4Component },
  { path: 'laminate/acacia', component: LaminateAcaciaComponent },
  { path: 'laminate/hickory', component: LaminateHickoryComponent },
  { path: 'laminate/single-width', component: LaminateSingleWidthComponent },
  { path: 'laminate/random-width', component: LaminateRandomWidthComponent },
  { path: 'laminate/value-collection', component: LaminateValueCollectionComponent },
  { path: 'vinyl/page/1', component: VinylP1Component },
  { path: 'vinyl/page/2', component: VinylP2Component },
  { path: 'vinyl/page/3', component: VinylP3Component },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

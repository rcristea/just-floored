import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { EngineeredAcaciaComponent } from './components/pages/engineered/engineered-acacia/engineered-acacia.component';
import { EngineeredBirchComponent } from './components/pages/engineered/engineered-birch/engineered-birch.component';
import { EngineeredHickoryComponent } from './components/pages/engineered/engineered-hickory/engineered-hickory.component';
import { EngineeredComponent } from './components/pages/engineered/engineered.component';
import { AcaciaCologneAcr042Component } from './components/pages/engineered/floors/acacia-cologne-acr042/acacia-cologne-acr042.component';
import { AcaciaLisbonAcr044Component } from './components/pages/engineered/floors/acacia-lisbon-acr044/acacia-lisbon-acr044.component';
import { CostaBeachComponent } from './components/pages/engineered/floors/costa-beach/costa-beach.component';
import { HickoryKlamathHir002Component } from './components/pages/engineered/floors/hickory-klamath-hir002/hickory-klamath-hir002.component';
import { HickoryMojaveHir001Component } from './components/pages/engineered/floors/hickory-mojave-hir001/hickory-mojave-hir001.component';
import { HickoryOmakHir003Component } from './components/pages/engineered/floors/hickory-omak-hir003/hickory-omak-hir003.component';
import { SantaBarbaraBeachComponent } from './components/pages/engineered/floors/santa-barbara-beach/santa-barbara-beach.component';
import { FloorsComponent } from './components/pages/floors/floors.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { Gt102PatinaOakComponent } from './components/pages/laminate/floors/gt102-patina-oak/gt102-patina-oak.component';
import { Gt105SnowOakComponent } from './components/pages/laminate/floors/gt105-snow-oak/gt105-snow-oak.component';
import { Gt108TawnyOakComponent } from './components/pages/laminate/floors/gt108-tawny-oak/gt108-tawny-oak.component';
import { Gt201CoffeeComponent } from './components/pages/laminate/floors/gt201-coffee/gt201-coffee.component';
import { Gt202ReddishComponent } from './components/pages/laminate/floors/gt202-reddish/gt202-reddish.component';
import { Gt203ChocolateComponent } from './components/pages/laminate/floors/gt203-chocolate/gt203-chocolate.component';
import { Gt204GreyComponent } from './components/pages/laminate/floors/gt204-grey/gt204-grey.component';
import { Gt212VolcanicAshComponent } from './components/pages/laminate/floors/gt212-volcanic-ash/gt212-volcanic-ash.component';
import { Gt213GeyerWalnutComponent } from './components/pages/laminate/floors/gt213-geyer-walnut/gt213-geyer-walnut.component';
import { Gt215RiverCypressComponent } from './components/pages/laminate/floors/gt215-river-cypress/gt215-river-cypress.component';
import { Gt216OldMasterComponent } from './components/pages/laminate/floors/gt216-old-master/gt216-old-master.component';
import { Gt217OldCaptainComponent } from './components/pages/laminate/floors/gt217-old-captain/gt217-old-captain.component';
import { Gt302RoseWoodComponent } from './components/pages/laminate/floors/gt302-rose-wood/gt302-rose-wood.component';
import { Gt307BrazilianCherryComponent } from './components/pages/laminate/floors/gt307-brazilian-cherry/gt307-brazilian-cherry.component';
import { Gt401GunstockHickoryComponent } from './components/pages/laminate/floors/gt401-gunstock-hickory/gt401-gunstock-hickory.component';
import { Gt402ExpressoHickoryComponent } from './components/pages/laminate/floors/gt402-expresso-hickory/gt402-expresso-hickory.component';
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
import { VinylLvpComponent } from './components/pages/vinyl/vinyl-lvp/vinyl-lvp.component';
import { VinylP1Component } from './components/pages/vinyl/vinyl-p1/vinyl-p1.component';
import { VinylP2Component } from './components/pages/vinyl/vinyl-p2/vinyl-p2.component';
import { VinylP3Component } from './components/pages/vinyl/vinyl-p3/vinyl-p3.component';
import { VinylWf6Component } from './components/pages/vinyl/vinyl-wf6/vinyl-wf6.component';
import { VinylWf8Component } from './components/pages/vinyl/vinyl-wf8/vinyl-wf8.component';
import { VinylWf9Component } from './components/pages/vinyl/vinyl-wf9/vinyl-wf9.component';
import { VinylWpcP1Component } from './components/pages/vinyl/vinyl-wpc/vinyl-wpc-p1/vinyl-wpc-p1.component';
import { VinylWpcP2Component } from './components/pages/vinyl/vinyl-wpc/vinyl-wpc-p2/vinyl-wpc-p2.component';
import { VinylWpcP3Component } from './components/pages/vinyl/vinyl-wpc/vinyl-wpc-p3/vinyl-wpc-p3.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'floors', component: FloorsComponent },
  { path: 'engineered', component: EngineeredComponent },
  { path: 'engineered/acacia', component: EngineeredAcaciaComponent },
  { path: 'engineered/birch', component: EngineeredBirchComponent },
  { path: 'engineered/hickory', component: EngineeredHickoryComponent },
  { path: 'engineered/acacia-cologne-acr042', component: AcaciaCologneAcr042Component },
  { path: 'engineered/acacia-lisbon-acr044', component: AcaciaLisbonAcr044Component },
  { path: 'engineered/costa-beach-6l', component: CostaBeachComponent },
  { path: 'engineered/hickory-klamath-hir002', component: HickoryKlamathHir002Component },
  { path: 'engineered/hickory-mojave-hir001', component: HickoryMojaveHir001Component },
  { path: 'engineered/hickory-omak-hir003', component: HickoryOmakHir003Component },
  { path: 'engineered/santa-barbara-beach-6p', component: SantaBarbaraBeachComponent },
  { path: 'laminate/page/1', component: LaminateP1Component },
  { path: 'laminate/page/2', component: LaminateP2Component },
  { path: 'laminate/page/3', component: LaminateP3Component },
  { path: 'laminate/page/4', component: LaminateP4Component },
  { path: 'laminate/acacia', component: LaminateAcaciaComponent },
  { path: 'laminate/hickory', component: LaminateHickoryComponent },
  { path: 'laminate/single-width', component: LaminateSingleWidthComponent },
  { path: 'laminate/random-width', component: LaminateRandomWidthComponent },
  { path: 'laminate/value-collection', component: LaminateValueCollectionComponent },
  { path: 'laminate/gt102-patina-oak', component: Gt102PatinaOakComponent },
  { path: 'laminate/gt105-snow-oak', component: Gt105SnowOakComponent },
  { path: 'laminate/gt108-tawny-oak', component: Gt108TawnyOakComponent },
  { path: 'laminate/gt201-coffee', component: Gt201CoffeeComponent},
  { path: 'laminate/gt202-reddish', component: Gt202ReddishComponent },
  { path: 'laminate/gt203-chocolate', component: Gt203ChocolateComponent },
  { path: 'laminate/gt204-grey', component: Gt204GreyComponent },
  { path: 'laminate/gt212-volcanic-ash', component: Gt212VolcanicAshComponent },
  { path: 'laminate/gt213-geyer-walnut', component: Gt213GeyerWalnutComponent },
  { path: 'laminate/gt215-river-cypress', component: Gt215RiverCypressComponent },
  { path: 'laminate/gt216-old-master', component: Gt216OldMasterComponent },
  { path: 'laminate/gt217-old-captain', component: Gt217OldCaptainComponent },
  { path: 'laminate/gt302-rose-wood', component: Gt302RoseWoodComponent },
  { path: 'laminate/gt307-brazilian-cherry', component: Gt307BrazilianCherryComponent },
  { path: 'laminate/gt401-gunstock-hickory', component: Gt401GunstockHickoryComponent },
  { path: 'laminate/gt402-expresso-hickory', component: Gt402ExpressoHickoryComponent },
  { path: 'vinyl/page/1', component: VinylP1Component },
  { path: 'vinyl/page/2', component: VinylP2Component },
  { path: 'vinyl/page/3', component: VinylP3Component },
  { path: 'vinyl/lvp', component: VinylLvpComponent },
  { path: 'vinyl/wpc/page/1', component: VinylWpcP1Component },
  { path: 'vinyl/wpc/page/2', component: VinylWpcP2Component },
  { path: 'vinyl/wpc/page/3', component: VinylWpcP3Component },
  { path: 'vinyl/wpc/wf6', component: VinylWf6Component },
  { path: 'vinyl/wpc/wf8', component: VinylWf8Component },
  { path: 'vinyl/wpc/wf9', component: VinylWf9Component },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

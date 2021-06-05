import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogP1Component } from './components/pages/blog/blog-p1/blog-p1.component';
import { BlogP2Component } from './components/pages/blog/blog-p2/blog-p2.component';
import { BlogBambooFlooringComponent } from './components/pages/blog/posts/blog-bamboo-flooring/blog-bamboo-flooring.component';
import { ChoosingTheRightFloorFinishComponent } from './components/pages/blog/posts/choosing-the-right-floor-finish/choosing-the-right-floor-finish.component';
import { FinishOrReplaceWoodFloorsComponent } from './components/pages/blog/posts/refinish-or-replace-wood-floors/refinish-or-replace-wood-floors.component';
import { HandscrapedHardwoodFlooringComponent } from './components/pages/blog/posts/handscraped-hardwood-flooring/handscraped-hardwood-flooring.component';
import { HardwoodFloorsLowVocsNoVocsComponent } from './components/pages/blog/posts/hardwood-floors-low-vocs-no-vocs/hardwood-floors-low-vocs-no-vocs.component';
import { HurricaneHarveyFloorRepairComponent } from './components/pages/blog/posts/hurricane-harvey-floor-repair/hurricane-harvey-floor-repair.component';
import { HurricaneMatthewFloorRepairComponent } from './components/pages/blog/posts/hurricane-matthew-floor-repair/hurricane-matthew-floor-repair.component';
import { LuxuryVinylPlanksFlooringInstallationComponent } from './components/pages/blog/posts/luxury-vinyl-planks-flooring-installation/luxury-vinyl-planks-flooring-installation.component';
import { NewThickerEngineeredFlooringComponent } from './components/pages/blog/posts/new-thicker-engineered-flooring/new-thicker-engineered-flooring.component';
import { NewTrendsInFlooringComponent } from './components/pages/blog/posts/new-trends-in-flooring/new-trends-in-flooring.component';
import { SpcVinylFlooringComponent } from './components/pages/blog/posts/spc-vinyl-flooring/spc-vinyl-flooring.component';
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
import { BambooFlooringComponent } from './components/pages/floors/about/bamboo-flooring/bamboo-flooring.component';
import { CorkFlooringComponent } from './components/pages/floors/about/cork-flooring/cork-flooring.component';
import { EngineeredWoodFlooringComponent } from './components/pages/floors/about/engineered-wood-flooring/engineered-wood-flooring.component';
import { LaminateFlooringComponent } from './components/pages/floors/about/laminate-flooring/laminate-flooring.component';
import { SolidWoodFlooringComponent } from './components/pages/floors/about/solid-wood-flooring/solid-wood-flooring.component';
import { VinylPlankFlooringComponent } from './components/pages/floors/about/vinyl-plank-flooring/vinyl-plank-flooring.component';
import { FloorsComponent } from './components/pages/floors/floors.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GoGreenComponent } from './components/pages/go-green/go-green.component';
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
import { Gt403SunriseHickoryComponent } from './components/pages/laminate/floors/gt403-sunrise-hickory/gt403-sunrise-hickory.component';
import { Gt404NightfallHickoryComponent } from './components/pages/laminate/floors/gt404-nightfall-hickory/gt404-nightfall-hickory.component';
import { Gt405SunsetHickoryComponent } from './components/pages/laminate/floors/gt405-sunset-hickory/gt405-sunset-hickory.component';
import { Gt406OliveComponent } from './components/pages/laminate/floors/gt406-olive/gt406-olive.component';
import { Gt407ParkWalnutComponent } from './components/pages/laminate/floors/gt407-park-walnut/gt407-park-walnut.component';
import { Gt409AcaciaNatureComponent } from './components/pages/laminate/floors/gt409-acacia-nature/gt409-acacia-nature.component';
import { Gt410AcaciaWalnutComponent } from './components/pages/laminate/floors/gt410-acacia-walnut/gt410-acacia-walnut.component';
import { Gt702GrandOakComponent } from './components/pages/laminate/floors/gt702-grand-oak/gt702-grand-oak.component';
import { Gt703MahoganyComponent } from './components/pages/laminate/floors/gt703-mahogany/gt703-mahogany.component';
import { Gt705BronzeOakComponent } from './components/pages/laminate/floors/gt705-bronze-oak/gt705-bronze-oak.component';
import { Gt706WinchesterOakComponent } from './components/pages/laminate/floors/gt706-winchester-oak/gt706-winchester-oak.component';
import { Gt707SilverMapleComponent } from './components/pages/laminate/floors/gt707-silver-maple/gt707-silver-maple.component';
import { Gt708HeronOakComponent } from './components/pages/laminate/floors/gt708-heron-oak/gt708-heron-oak.component';
import { Gt709WalnutOakComponent } from './components/pages/laminate/floors/gt709-walnut-oak/gt709-walnut-oak.component';
import { Gt710ParkWalnutComponent } from './components/pages/laminate/floors/gt710-park-walnut/gt710-park-walnut.component';
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
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { Vf001PrestigeComponent } from './components/pages/vinyl/floors/vf001-prestige/vf001-prestige.component';
import { Vf002RockportComponent } from './components/pages/vinyl/floors/vf002-rockport/vf002-rockport.component';
import { Vf003CocaBlossomComponent } from './components/pages/vinyl/floors/vf003-coca-blossom/vf003-coca-blossom.component';
import { Vf004AshfordComponent } from './components/pages/vinyl/floors/vf004-ashford/vf004-ashford.component';
import { Vf005OakComponent } from './components/pages/vinyl/floors/vf005-oak/vf005-oak.component';
import { Vf006AcaciaComponent } from './components/pages/vinyl/floors/vf006-acacia/vf006-acacia.component';
import { Wf601StoneGreyOakComponent } from './components/pages/vinyl/floors/wf601-stone-grey-oak/wf601-stone-grey-oak.component';
import { Wf602CountrysideOakComponent } from './components/pages/vinyl/floors/wf602-countryside-oak/wf602-countryside-oak.component';
import { Wf603RusticOakComponent } from './components/pages/vinyl/floors/wf603-rustic-oak/wf603-rustic-oak.component';
import { Wf604AlexaOakComponent } from './components/pages/vinyl/floors/wf604-alexa-oak/wf604-alexa-oak.component';
import { Wf605SpringfieldOakComponent } from './components/pages/vinyl/floors/wf605-springfield-oak/wf605-springfield-oak.component';
import { Wf606BlackstoneOakComponent } from './components/pages/vinyl/floors/wf606-blackstone-oak/wf606-blackstone-oak.component';
import { Wf801WesternOakComponent } from './components/pages/vinyl/floors/wf801-western-oak/wf801-western-oak.component';
import { Wf802NaturalWalnutComponent } from './components/pages/vinyl/floors/wf802-natural-walnut/wf802-natural-walnut.component';
import { Wf803CoffeeMapleComponent } from './components/pages/vinyl/floors/wf803-coffee-maple/wf803-coffee-maple.component';
import { Wf804AshOakComponent } from './components/pages/vinyl/floors/wf804-ash-oak/wf804-ash-oak.component';
import { Wf901AmberAcaciaComponent } from './components/pages/vinyl/floors/wf901-amber-acacia/wf901-amber-acacia.component';
import { Wf902NatureAcaciaComponent } from './components/pages/vinyl/floors/wf902-nature-acacia/wf902-nature-acacia.component';
import { Wf903BalsamComponent } from './components/pages/vinyl/floors/wf903-balsam/wf903-balsam.component';
import { Wf904SeabrookOakComponent } from './components/pages/vinyl/floors/wf904-seabrook-oak/wf904-seabrook-oak.component';
import { Wf905DriftwoodOakComponent } from './components/pages/vinyl/floors/wf905-driftwood-oak/wf905-driftwood-oak.component';
import { Wf906TavernOakComponent } from './components/pages/vinyl/floors/wf906-tavern-oak/wf906-tavern-oak.component';
import { Wf907WillowOakComponent } from './components/pages/vinyl/floors/wf907-willow-oak/wf907-willow-oak.component';
import { Wf908FlintOakComponent } from './components/pages/vinyl/floors/wf908-flint-oak/wf908-flint-oak.component';
import { Wf909ClarionWoodComponent } from './components/pages/vinyl/floors/wf909-clarion-wood/wf909-clarion-wood.component';
import { Wf910HarvestWalnutComponent } from './components/pages/vinyl/floors/wf910-harvest-walnut/wf910-harvest-walnut.component';
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
import { DustlessSandingWoodFloorsComponent } from './components/pages/blog/posts/dustless-sanding-wood-floors/dustless-sanding-wood-floors.component';
import { BambooFlooringCategoryComponent } from './components/pages/blog/categories/bamboo-flooring-category/bamboo-flooring-category.component';
import { CorkFlooringCategoryComponent } from './components/pages/blog/categories/cork-flooring-category/cork-flooring-category.component';
import { EngineeredWoodCategoryComponent } from './components/pages/blog/categories/engineered-wood-category/engineered-wood-category.component';
import { HardwoodFlooringCategoryComponent } from './components/pages/blog/categories/hardwood-flooring-category/hardwood-flooring-category.component';
import { LaminateFlooringCategoryComponent } from './components/pages/blog/categories/laminate-flooring-category/laminate-flooring-category.component';
import { RefinishingFloorsCategoryComponent } from './components/pages/blog/categories/refinishing-floors-category/refinishing-floors-category.component';
import { StoneTitleCategoryComponent } from './components/pages/blog/categories/stone-title-category/stone-title-category.component';
import { VinylPlankCategoryComponent } from './components/pages/blog/categories/vinyl-plank-category/vinyl-plank-category.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FreeQuoteComponent } from './components/pages/free-quote/free-quote.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AlpharettaComponent } from './components/pages/service-areas/alpharetta/alpharetta.component';
import { AtlantaComponent } from './components/pages/service-areas/atlanta/atlanta.component';
import { AthensComponent } from './components/pages/service-areas/athens/athens.component';
import { BraseltonComponent } from './components/pages/service-areas/braselton/braselton.component';
import { BufordComponent } from './components/pages/service-areas/buford/buford.component';
import { ChateauElanComponent } from './components/pages/service-areas/chateau-elan/chateau-elan.component';
import { ConcordeComponent } from './components/pages/service-areas/concorde/concorde.component';
import { CummingComponent } from './components/pages/service-areas/cumming/cumming.component';
import { DaculaComponent } from './components/pages/service-areas/dacula/dacula.component';
import { DecaturComponent } from './components/pages/service-areas/decatur/decatur.component';
import { DuluthComponent } from './components/pages/service-areas/duluth/duluth.component';
import { DunwoodyComponent } from './components/pages/service-areas/dunwoody/dunwoody.component';
import { FloweryBranchComponent } from './components/pages/service-areas/flowery-branch/flowery-branch.component';
import { FortMillComponent } from './components/pages/service-areas/fort-mill/fort-mill.component';
import { GainesvilleComponent } from './components/pages/service-areas/gainesville/gainesville.component';
import { GalvestonComponent } from './components/pages/service-areas/galveston/galveston.component';
import { HoschtonComponent } from './components/pages/service-areas/hoschton/hoschton.component';
import { HoustonComponent } from './components/pages/service-areas/houston/houston.component';
import { JacksonvilleComponent } from './components/pages/service-areas/jacksonville/jacksonville.component';
import { JohnsCreekComponent } from './components/pages/service-areas/johns-creek/johns-creek.component';
import { KennesawComponent } from './components/pages/service-areas/kennesaw/kennesaw.component';
import { LilburnComponent } from './components/pages/service-areas/lilburn/lilburn.component';
import { LoganvilleComponent } from './components/pages/service-areas/loganville/loganville.component';
import { MariettaComponent } from './components/pages/service-areas/marietta/marietta.component';
import { MiltonComponent } from './components/pages/service-areas/milton/milton.component';
import { MyrtleBeachComponent } from './components/pages/service-areas/myrtle-beach/myrtle-beach.component';
import { PalmValleyComponent } from './components/pages/service-areas/palm-valley/palm-valley.component';
import { PeachtreeCornersComponent } from './components/pages/service-areas/peachtree-corners/peachtree-corners.component';
import { PonteVedraComponent } from './components/pages/service-areas/ponte-vedra/ponte-vedra.component';
import { RoswellComponent } from './components/pages/service-areas/roswell/roswell.component';
import { SandySpringsComponent } from './components/pages/service-areas/sandy-springs/sandy-springs.component';
import { SnellvilleComponent } from './components/pages/service-areas/snellville/snellville.component';
import { OrangeParkComponent } from './components/pages/service-areas/orange-park/orange-park.component';
import { OrlandoComponent } from './components/pages/service-areas/orlando/orlando.component';
import { SmyrnaComponent } from './components/pages/service-areas/smyrna/smyrna.component';
import { StAugustineComponent } from './components/pages/service-areas/st-augustine/st-augustine.component';
import { SugarHillComponent } from './components/pages/service-areas/sugar-hill/sugar-hill.component';
import { SuwaneeComponent } from './components/pages/service-areas/suwanee/suwanee.component';
import { TuckerComponent } from './components/pages/service-areas/tucker/tucker.component';
import { ViningsComponent } from './components/pages/service-areas/vinings/vinings.component';
import { WinterParkComponent } from './components/pages/service-areas/winter-park/winter-park.component';
import { CouponComponent } from './components/pages/coupon/coupon.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Your Harwood Floor, Tile, and Vinyl Specialists | Just Floored' } },
  { path: 'home', component: HomePageComponent, data: { title: 'Your Harwood Floor, Tile, and Vinyl Specialists | Just Floored' } },
  { path: 'about-us', component: AboutUsComponent, data: { title: 'Your Harwood Floor, Tile, and Vinyl Specialists | Just Floored' } },
  { path: 'floors', component: FloorsComponent, data: { title: 'Products and Floors | Just Floored' } },
  { path: 'solid-wood-flooring', component: SolidWoodFlooringComponent, data: { title: 'Hardwood flooring installation in either pre-finished or unfinished wood planks to finish onsite | Just Floored' } },
  { path: 'engineered-wood-flooring', component: EngineeredWoodFlooringComponent, data: { title: 'Engineered wood flooring installation pre-finished choose your style and stain color| Just Floored' } },
  { path: 'laminate-flooring', component: LaminateFlooringComponent, data: { title: 'Laminate flooring installation looks like wood easy maintenance hundreds of style stain color options| Just Floored' } },
  { path: 'cork-flooring', component: CorkFlooringComponent, data: { title: 'Cork flooring installation with great looks and superb comfort| Just Floored' } },
  { path: 'bamboo-flooring', component: BambooFlooringComponent, data: { title: 'Bamboo flooring installation with many finishes and styles to choose from| Just Floored' } },
  { path: 'vinyl-plank-flooring', component: VinylPlankFlooringComponent, data: { title: 'Vinyl Plank flooring installation in hundreds of patterns colors Flooring Contractor save you thousands| Just Floored' } },
  { path: 'engineered', component: EngineeredComponent, data: { title: 'Engineered Flooring | Just Floored' } },
  { path: 'engineered/acacia', component: EngineeredAcaciaComponent, data: { title: 'Acacia Engineered Flooring | Just Floored' } },
  { path: 'engineered/birch', component: EngineeredBirchComponent, data: { title: 'Birch Engineered Flooring | Just Floored' } },
  { path: 'engineered/hickory', component: EngineeredHickoryComponent, data: { title: 'Hickory Engineered Flooring | Just Floored' } },
  { path: 'engineered/acacia-cologne-acr042', component: AcaciaCologneAcr042Component, data: { title: 'Acacia (Cologne) - ACR042 | Just Floored' } },
  { path: 'engineered/acacia-lisbon-acr044', component: AcaciaLisbonAcr044Component, data: { title: 'Acacia (Lisbon) - ACR044 | Just Floored' } },
  { path: 'engineered/costa-beach-6l', component: CostaBeachComponent, data: { title: 'Costa Beach - 6L | Just Floored' } },
  { path: 'engineered/hickory-klamath-hir002', component: HickoryKlamathHir002Component, data: { title: 'Hickory (Klamath) - HIR002 | Just Floored' } },
  { path: 'engineered/hickory-mojave-hir001', component: HickoryMojaveHir001Component, data: { title: 'Hickory (Mojave) - HIR001 | Just Floored' } },
  { path: 'engineered/hickory-omak-hir003', component: HickoryOmakHir003Component, data: { title: 'Hickory (Omak) - HIR003 | Just Floored' } },
  { path: 'engineered/santa-barbara-beach-6p', component: SantaBarbaraBeachComponent, data: { title: '' } },
  { path: 'laminate/page/1', component: LaminateP1Component, data: { title: 'Laminate Flooring | Just Floored' } },
  { path: 'laminate/page/2', component: LaminateP2Component, data: { title: 'Laminate Flooring | Just Floored' } },
  { path: 'laminate/page/3', component: LaminateP3Component, data: { title: 'Laminate Flooring | Just Floored' } },
  { path: 'laminate/page/4', component: LaminateP4Component, data: { title: 'Laminate Flooring | Just Floored' } },
  { path: 'laminate/acacia', component: LaminateAcaciaComponent, data: { title: 'Acacia Laminate Flooring | Just Floored' } },
  { path: 'laminate/hickory', component: LaminateHickoryComponent, data: { title: 'Hickory Laminate Flooring | Just Floored' } },
  { path: 'laminate/single-width', component: LaminateSingleWidthComponent, data: { title: 'Single Width Laminate Flooring | Just Floored' } },
  { path: 'laminate/random-width', component: LaminateRandomWidthComponent, data: { title: 'Random Width Laminate Flooring | Just Floored' } },
  { path: 'laminate/value-collection', component: LaminateValueCollectionComponent, data: { title: 'Value Collection Laminate Flooring | Just Floored' } },
  { path: 'laminate/gt102-patina-oak', component: Gt102PatinaOakComponent, data: { title: 'GT102 Patina Oak | Just Floored' } },
  { path: 'laminate/gt105-snow-oak', component: Gt105SnowOakComponent, data: { title: 'GT105 Snow Oak | Just Floored' } },
  { path: 'laminate/gt108-tawny-oak', component: Gt108TawnyOakComponent, data: { title: 'GT108 Tawny Oak | Just Floored' } },
  { path: 'laminate/gt201-coffee', component: Gt201CoffeeComponent, data: { title: 'GT201 Coffee | Just Floored' } },
  { path: 'laminate/gt202-reddish', component: Gt202ReddishComponent, data: { title: 'GT202 Reddish | Just Floored' } },
  { path: 'laminate/gt203-chocolate', component: Gt203ChocolateComponent, data: { title: 'GT203 Chocolate | Just Floored' } },
  { path: 'laminate/gt204-grey', component: Gt204GreyComponent, data: { title: 'GT204 Grey | Just Floored' } },
  { path: 'laminate/gt212-volcanic-ash', component: Gt212VolcanicAshComponent, data: { title: 'GT212 Volcanic Ash | Just Floored' } },
  { path: 'laminate/gt213-geyer-walnut', component: Gt213GeyerWalnutComponent, data: { title: 'GT213 Geyer Walnut | Just Floored' } },
  { path: 'laminate/gt215-river-cypress', component: Gt215RiverCypressComponent, data: { title: 'GT215 River Cypress | Just Floored' } },
  { path: 'laminate/gt216-old-master', component: Gt216OldMasterComponent, data: { title: 'GT216 Old Master | Just Floored' } },
  { path: 'laminate/gt217-old-captain', component: Gt217OldCaptainComponent, data: { title: 'GT217 Old Captain | Just Floored' } },
  { path: 'laminate/gt302-rose-wood', component: Gt302RoseWoodComponent, data: { title: 'GT302 Rose Wood | Just Floored' } },
  { path: 'laminate/gt307-brazilian-cherry', component: Gt307BrazilianCherryComponent, data: { title: 'GT307 Brazilian Cherry | Just Floored' } },
  { path: 'laminate/gt401-gunstock-hickory', component: Gt401GunstockHickoryComponent, data: { title: 'GT401 Gunstock Hickory | Just Floored' } },
  { path: 'laminate/gt402-expresso-hickory', component: Gt402ExpressoHickoryComponent, data: { title: 'GT402 Expresso Hickory | Just Floored' } },
  { path: 'laminate/gt403-sunrise-hickory', component: Gt403SunriseHickoryComponent, data: { title: 'GT402 Sunrise Hickory | Just Floored' } },
  { path: 'laminate/gt404-nightfall-hickory', component: Gt404NightfallHickoryComponent, data: { title: 'GT404 Nightfall Hickory | Just Floored' } },
  { path: 'laminate/gt405-sunset-hickory', component: Gt405SunsetHickoryComponent, data: { title: 'GT405 Sunset Hickory | Just Floored' } },
  { path: 'laminate/gt406-olive', component: Gt406OliveComponent, data: { title: 'GT406 Olive | Just Floored' } },
  { path: 'laminate/gt407-park-walnut', component: Gt407ParkWalnutComponent, data: { title: 'GT407 Park Walnut | Just Floored' } },
  { path: 'laminate/gt409-acacia-nature', component: Gt409AcaciaNatureComponent, data: { title: 'GT409 Acacia Nature | Just Floored' } },
  { path: 'laminate/gt410-acacia-walnut', component: Gt410AcaciaWalnutComponent, data: { title: 'GT410 Acacia Walnut | Just Floored' } },
  { path: 'laminate/gt702-grand-oak', component: Gt702GrandOakComponent, data: { title: 'GT702 Grand Oak | Just Floored' } },
  { path: 'laminate/gt703-mahogany', component: Gt703MahoganyComponent, data: { title: 'GT703 Mahogany | Just Floored' } },
  { path: 'laminate/gt705-bronze-oak', component: Gt705BronzeOakComponent, data: { title: 'GT705 Bronze Oak | Just Floored' } },
  { path: 'laminate/gt706-winchester-oak', component: Gt706WinchesterOakComponent, data: { title: 'GT706 Winchester Oak | Just Floored' } },
  { path: 'laminate/gt707-silver-maple', component: Gt707SilverMapleComponent, data: { title: 'GT707 Silver Maple | Just Floored' } },
  { path: 'laminate/gt708-heron-oak', component: Gt708HeronOakComponent, data: { title: 'GT708 Heron Oak | Just Floored' } },
  { path: 'laminate/gt709-walnut-oak', component: Gt709WalnutOakComponent, data: { title: 'GT709 Walnut Oak | Just Floored' } },
  { path: 'laminate/gt710-park-walnut', component: Gt710ParkWalnutComponent, data: { title: 'GT710 Park Walnut | Just Floored' } },
  { path: 'vinyl/page/1', component: VinylP1Component, data: { title: 'Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/page/2', component: VinylP2Component, data: { title: 'Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/page/3', component: VinylP3Component, data: { title: 'Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/lvp', component: VinylLvpComponent, data: { title: 'LVP Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/wpc/page/1', component: VinylWpcP1Component, data: { title: 'WPC Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/wpc/page/2', component: VinylWpcP2Component, data: { title: 'WPC Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/wpc/page/3', component: VinylWpcP3Component, data: { title: 'WPC Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/wpc/wf6', component: VinylWf6Component, data: { title: 'WF6 Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/wpc/wf8', component: VinylWf8Component, data: { title: 'WF8 Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/wpc/wf9', component: VinylWf9Component, data: { title: 'WF9 Vinyl Flooring | Just Floored' } },
  { path: 'vinyl/vf001-prestige', component: Vf001PrestigeComponent, data: { title: 'VF001 Prestige | Just Floored' } },
  { path: 'vinyl/vf002-rockport', component: Vf002RockportComponent, data: { title: 'VF002 Rockport | Just Floored' } },
  { path: 'vinyl/vf003-coca-blossom', component: Vf003CocaBlossomComponent, data: { title: 'VF003 Coca Blossom | Just Floored' } },
  { path: 'vinyl/vf004-ashford', component: Vf004AshfordComponent, data: { title: 'VF004 Ashford | Just Floored' } },
  { path: 'vinyl/vf005-oak', component: Vf005OakComponent, data: { title: 'VF005 Oak | Just Floored' } },
  { path: 'vinyl/vf006-acacia', component: Vf006AcaciaComponent, data: { title: 'VF006 Acacia | Just Floored' } },
  { path: 'vinyl/wf601-stone-grey-oak', component: Wf601StoneGreyOakComponent, data: { title: 'WF601 Stone Grey Oak | Just Floored' } },
  { path: 'vinyl/wf602-countryside-oak', component: Wf602CountrysideOakComponent, data: { title: 'WF602 Countryside Oak | Just Floored' } },
  { path: 'vinyl/wf603-rustic-oak', component: Wf603RusticOakComponent, data: { title: 'WF603 Rustic Oak | Just Floored' } },
  { path: 'vinyl/wf604-alexa-oak', component: Wf604AlexaOakComponent, data: { title: 'WF604 Alexa Oak | Just Floored' } },
  { path: 'vinyl/wf605-springfield-oak', component: Wf605SpringfieldOakComponent, data: { title: 'WF605 Springfield Oak | Just Floored' } },
  { path: 'vinyl/wf606-blackstone-oak', component: Wf606BlackstoneOakComponent, data: { title: 'WF606 Blackstone Oak | Just Floored' } },
  { path: 'vinyl/wf801-western-oak', component: Wf801WesternOakComponent, data: { title: 'WF801 Western Oak | Just Floored' } },
  { path: 'vinyl/wf802-natural-walnut', component: Wf802NaturalWalnutComponent, data: { title: 'WF802 Natural Walnut | Just Floored' } },
  { path: 'vinyl/wf803-coffee-maple', component: Wf803CoffeeMapleComponent, data: { title: 'WF803 Coffee Maple | Just Floored' } },
  { path: 'vinyl/wf804-ash-oak', component: Wf804AshOakComponent, data: { title: 'WF604 Ash Oak | Just Floored' } },
  { path: 'vinyl/wf901-amber-acacia', component: Wf901AmberAcaciaComponent, data: { title: 'WF901 Amber Acacia | Just Floored' } },
  { path: 'vinyl/wf902-nature-acacia', component: Wf902NatureAcaciaComponent, data: { title: 'WF902 Natura Acacia' } },
  { path: 'vinyl/wf903-balsam', component: Wf903BalsamComponent, data: { title: 'WF903 Balsam | Just Floored' } },
  { path: 'vinyl/wf905-driftwood-oak', component: Wf905DriftwoodOakComponent, data: { title: 'WF905 Driftwood Oak | Just Floored' } },
  { path: 'vinyl/wf906-tavern-oak', component: Wf906TavernOakComponent, data: { title: 'WF906 Tavern Oak | Just Floored' } },
  { path: 'vinyl/wf907-willow-oak', component: Wf907WillowOakComponent, data: { title: 'WF907 Willow Oak | Just Floored' } },
  { path: 'vinyl/wf908-flint-oak', component: Wf908FlintOakComponent, data: { title: 'WF908 Flint Oak | Just Floored' } },
  { path: 'vinyl/wf909-clarion-wood', component: Wf909ClarionWoodComponent, data: { title: 'WF909 Clarion Wood | Just Floored' } },
  { path: 'vinyl/wf910-harvest-walnut', component: Wf910HarvestWalnutComponent, data: { title: 'WF910 Harvest Walnut' } },
  { path: 'vinyl/wf904-seabrook-oak', component: Wf904SeabrookOakComponent, data: { title: 'WF904Seabrook Oak | Just Floored' } },
  { path: 'services', component: ServicesComponent, data: { title: 'Hardwood flooring, install solid hardwood floors, tiles, oak, ceramic, laminate, Jacksonville, Houston, Charlotte, Ballantyne | Just Floored' } },
  { path: 'gallery', component: GalleryComponent, data: { title: 'Flooring Galleries | Just Floored' } },
  { path: 'testimonials', component: TestimonialsComponent, data: { title: 'Atlanta solid wood flooring installation, Jacksonville Hardwood Floor Installation, Houston Hardwood Floor Installer | Just Floored' } },
  { path: 'go-green', component: GoGreenComponent, data: { title: 'Go Green with hardwood floor installation eco-friendly products| Just Floored' } },
  { path: 'blog', component: BlogP1Component, data: { title: 'Flooring Contractor Blog | Just Floored' } },
  { path: 'blog/page/2', component: BlogP2Component, data: { title: 'Flooring Contractor Blog | Just Floored' } },
  { path: 'blog/posts/spc-vinyl-flooring', component: SpcVinylFlooringComponent, data: { title: 'SPC Vinyl Flooring | Just Floored' } },
  { path: 'blog/posts/luxury-vinyl-planks-flooring-installation', component: LuxuryVinylPlanksFlooringInstallationComponent, data: { title: 'Luxury Vinyl Planks Flooring Installation | Just Floored' } },
  { path: 'blog/posts/choosing-the-right-floor-finish', component: ChoosingTheRightFloorFinishComponent, data: { title: 'Choosing the Right Floor Finish | Just Floored' } },
  { path: 'blog/posts/hurricane-harvey-floor-repair', component: HurricaneHarveyFloorRepairComponent, data: { title: 'Hurricane Harvey Floor Repair | Just Floored' } },
  { path: 'blog/posts/new-thicker-engineered-flooring', component: NewThickerEngineeredFlooringComponent, data: { title: 'New Thicker Engineered Flooring | Just Floored' } },
  { path: 'blog/posts/hurricane-matthew-floor-repair', component: HurricaneMatthewFloorRepairComponent, data: { title: 'Hurricane Matthew Floor Repair | Just Floored' } },
  { path: 'blog/posts/bamboo-flooring', component: BlogBambooFlooringComponent, data: { title: 'Bamboo Flooring | Just Floored' } },
  { path: 'blog/posts/handscraped-hardwood-flooring', component: HandscrapedHardwoodFlooringComponent, data: { title: 'Handscraped Hardwood Flooring | Just Floored' } },
  { path: 'blog/posts/new-trends-in-flooring', component: NewTrendsInFlooringComponent, data: { title: 'New Trends in Flooring | Just Floored' } },
  { path: 'blog/posts/hardwood-floors-low-vocs-no-vocs', component: HardwoodFloorsLowVocsNoVocsComponent, data: { title: 'Hardwood Floors - Low VOC\'s and No VOC\'s | Just Floored' } },
  { path: 'blog/posts/refinish-or-replace-wood-floors', component: FinishOrReplaceWoodFloorsComponent, data: { title: 'Finish or Replace Wood Floors | Just Floored' } },
  { path: 'blog/posts/dustless-sanding-wood-floors', component: DustlessSandingWoodFloorsComponent, data: { title: 'Dustless Sanding Wood Floors | Just Floored' } },
  { path: 'blog/categories/bamboo-flooring', component: BambooFlooringCategoryComponent, data: { title: 'Bamboo Flooring | Just Floored' } },
  { path: 'blog/categories/cork-flooring', component: CorkFlooringCategoryComponent, data: { title: 'Cork Flooring | Just Floored' } },
  { path: 'blog/categories/engineered-wood-flooring', component: EngineeredWoodCategoryComponent, data: { title: 'Engineered Wood Flooring | Just Floored' } },
  { path: 'blog/categories/hardwood-flooring', component: HardwoodFlooringCategoryComponent, data: { title: 'Hardwood Flooring | Just Floored' } },
  { path: 'blog/categories/laminate-flooring', component: LaminateFlooringCategoryComponent, data: { title: 'Laminate Flooring | Just Floored' } },
  { path: 'blog/categories/refinishing-floors', component: RefinishingFloorsCategoryComponent, data: { title: 'Refinishing Floors | Just Floored' } },
  { path: 'blog/categories/stone-title', component: StoneTitleCategoryComponent, data: { title: 'Stone/Tile | Just Floored' } },
  { path: 'blog/categories/vinyl-plank', component: VinylPlankCategoryComponent, data: { title: 'Vinyl Plank | Just Floored' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact | Just Floored' } },
  { path: 'free-quote', component: FreeQuoteComponent, data: { title: 'Contact Just Floored LLC Flooring Contractor to install wood floors, engineered flooring, laminate, hand scraped, bamboo, cork, stone, tile | Just Floored' } },
  { path: 'service-area/floor-installation-alpharetta', component: AlpharettaComponent, data: { title: 'Alpharetta Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/atlanta-hardwood-installers', component: AtlantaComponent, data: { title: 'Atlanta Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/wood-floors-athens-georgia', component: AthensComponent, data: { title: 'Athens Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/braselton-floor-installation', component: BraseltonComponent, data: { title: 'Braselton Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/buford-flooring-contractor', component: BufordComponent, data: { title: 'Buford Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/chateau-elan-wood-floor-installation', component: ChateauElanComponent, data: { title: 'Chateau Elan Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/floor-installation-concorde-north-carolina', component: ConcordeComponent, data: { title: 'Concorde Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/cumming-floor-installation', component: CummingComponent, data: { title: 'Cumming Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/dacula-floor-installation', component: DaculaComponent, data: { title: 'Dacula Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/decatur-floor-installer', component: DecaturComponent, data: { title: 'Decatur Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/duluth-floor-installation', component: DuluthComponent, data: { title: 'Duluth Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/dunwoody-floor-installation-service', component: DunwoodyComponent, data: { title: 'Dunwoody Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/flowery-branch-floor-installer', component: FloweryBranchComponent, data: { title: 'Flowery Branch Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/fort-mill-floor-installation', component: FortMillComponent, data: { title: 'Fort Mill Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/gainesville-wood-floor-installation', component: GainesvilleComponent, data: { title: 'Gainesville Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/woodlands-hardwood-floor-installation', component: GalvestonComponent, data: { title: 'Woodlands Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/hoschton-flooring-contractor', component: HoschtonComponent, data: { title: 'Hoschton Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/houston-floor-installation', component: HoustonComponent, data: { title: 'Houston Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/jacksonville-hardwood-floors', component: JacksonvilleComponent, data: { title: 'Jacksonville Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/flooring-installations-johns-creek', component: JohnsCreekComponent, data: { title: 'Johns Creek Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/kennesaw-floor-installation', component: KennesawComponent, data: { title: 'Kennesaw Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/lilburn-wood-floor-installation', component: LilburnComponent, data: { title: 'Lilburn Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/loganville-floor-installation', component: LoganvilleComponent, data: { title: 'Loganville Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/hardwood-floor-installation-marietta-ga', component: MariettaComponent, data: { title: 'Marietta Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/floor-installation-milton', component: MiltonComponent, data: { title: 'Milton Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/myrtle-beach-floor-installation-refinishing', component: MyrtleBeachComponent, data: { title: 'Myrtle Beach Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/palm-valley-floor-installation', component: PalmValleyComponent, data: { title: 'Palm Valley Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/peachtree-corners-hardwood-floor-installation', component: PeachtreeCornersComponent, data: { title: 'Peachtree Corners Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/ponte-vedra-florida', component: PonteVedraComponent, data: { title: 'Ponte Vedra Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/roswell-floor-installation', component: RoswellComponent, data: { title: 'Roswell Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/floor-installer-sandy-springs', component: SandySpringsComponent, data: { title: 'Sandy Springs Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/snellville-floor-installation', component: SnellvilleComponent, data: { title: 'Snellville Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/orange-park-floor-installation', component: OrangeParkComponent, data: { title: 'Orange Park Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/orlando-floor-installation', component: OrlandoComponent, data: { title: 'Orlando Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/smyrna-floor-installation', component: SmyrnaComponent, data: { title: 'Smryna Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/st-augusting-floor-installation', component: StAugustineComponent, data: { title: 'St. Augustine Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/sugar-hill-floor-installation', component: SugarHillComponent, data: { title: 'Sugar Hill Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/suwanee-floor-installer', component: SuwaneeComponent, data: { title: 'Suwanee Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/tucker-floor-installation', component: TuckerComponent, data: { title: 'Tucker Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/vinings-floor-installation', component: ViningsComponent, data: { title: 'Vinings Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'service-area/winter-park-floor-installation', component: WinterParkComponent, data: { title: 'Winter Park Hardwood Floor Installation, Floor Laying, Dustless Sanding, Wood Floor Refinishing | Just Floored' } },
  { path: 'coupon', component: CouponComponent, data: { title: 'Save big on floor installation projects with Just Floored, LLC | Just Floored' } },
  { path: '404', component: NotFoundComponent, data: { title: 'Page Not Found' } },
  { path: '**', redirectTo: '/404' }, // Must be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

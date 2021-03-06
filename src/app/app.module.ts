// .------.
// |г.--. |
// | :(): |
// | ()() |
// | '--'г|
// '------'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { DatepickerModule } from 'ng2-datepicker';

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
import { Wf905DriftwoodOakComponent } from './components/pages/vinyl/floors/wf905-driftwood-oak/wf905-driftwood-oak.component';
import { Wf906TavernOakComponent } from './components/pages/vinyl/floors/wf906-tavern-oak/wf906-tavern-oak.component';
import { Wf907WillowOakComponent } from './components/pages/vinyl/floors/wf907-willow-oak/wf907-willow-oak.component';
import { Wf908FlintOakComponent } from './components/pages/vinyl/floors/wf908-flint-oak/wf908-flint-oak.component';
import { Wf909ClarionWoodComponent } from './components/pages/vinyl/floors/wf909-clarion-wood/wf909-clarion-wood.component';
import { Wf910HarvestWalnutComponent } from './components/pages/vinyl/floors/wf910-harvest-walnut/wf910-harvest-walnut.component';
import { Wf904SeabrookOakComponent } from './components/pages/vinyl/floors/wf904-seabrook-oak/wf904-seabrook-oak.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { SolidWoodFlooringComponent } from './components/pages/floors/about/solid-wood-flooring/solid-wood-flooring.component';
import { EngineeredWoodFlooringComponent } from './components/pages/floors/about/engineered-wood-flooring/engineered-wood-flooring.component';
import { LaminateFlooringComponent } from './components/pages/floors/about/laminate-flooring/laminate-flooring.component';
import { CorkFlooringComponent } from './components/pages/floors/about/cork-flooring/cork-flooring.component';
import { BambooFlooringComponent } from './components/pages/floors/about/bamboo-flooring/bamboo-flooring.component';
import { VinylPlankFlooringComponent } from './components/pages/floors/about/vinyl-plank-flooring/vinyl-plank-flooring.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { GoGreenComponent } from './components/pages/go-green/go-green.component';
import { BlogP1Component } from './components/pages/blog/blog-p1/blog-p1.component';
import { BlogP2Component } from './components/pages/blog/blog-p2/blog-p2.component';
import { SpcVinylFlooringComponent } from './components/pages/blog/posts/spc-vinyl-flooring/spc-vinyl-flooring.component';
import { LuxuryVinylPlanksFlooringInstallationComponent } from './components/pages/blog/posts/luxury-vinyl-planks-flooring-installation/luxury-vinyl-planks-flooring-installation.component';
import { ChoosingTheRightFloorFinishComponent } from './components/pages/blog/posts/choosing-the-right-floor-finish/choosing-the-right-floor-finish.component';
import { HurricaneHarveyFloorRepairComponent } from './components/pages/blog/posts/hurricane-harvey-floor-repair/hurricane-harvey-floor-repair.component';
import { NewThickerEngineeredFlooringComponent } from './components/pages/blog/posts/new-thicker-engineered-flooring/new-thicker-engineered-flooring.component';
import { HurricaneMatthewFloorRepairComponent } from './components/pages/blog/posts/hurricane-matthew-floor-repair/hurricane-matthew-floor-repair.component';
import { HandscrapedHardwoodFlooringComponent } from './components/pages/blog/posts/handscraped-hardwood-flooring/handscraped-hardwood-flooring.component';
import { BlogBambooFlooringComponent } from './components/pages/blog/posts/blog-bamboo-flooring/blog-bamboo-flooring.component';
import { NewTrendsInFlooringComponent } from './components/pages/blog/posts/new-trends-in-flooring/new-trends-in-flooring.component';
import { HardwoodFloorsLowVocsNoVocsComponent } from './components/pages/blog/posts/hardwood-floors-low-vocs-no-vocs/hardwood-floors-low-vocs-no-vocs.component';
import { FinishOrReplaceWoodFloorsComponent } from './components/pages/blog/posts/refinish-or-replace-wood-floors/refinish-or-replace-wood-floors.component';
import { DustlessSandingWoodFloorsComponent } from './components/pages/blog/posts/dustless-sanding-wood-floors/dustless-sanding-wood-floors.component';
import { BambooFlooringCategoryComponent } from './components/pages/blog/categories/bamboo-flooring-category/bamboo-flooring-category.component';
import { CorkFlooringCategoryComponent } from './components/pages/blog/categories/cork-flooring-category/cork-flooring-category.component';
import { EngineeredWoodCategoryComponent } from './components/pages/blog/categories/engineered-wood-category/engineered-wood-category.component';
import { HardwoodFlooringCategoryComponent } from './components/pages/blog/categories/hardwood-flooring-category/hardwood-flooring-category.component';
import { LaminateFlooringCategoryComponent } from './components/pages/blog/categories/laminate-flooring-category/laminate-flooring-category.component';
import { RefinishingFloorsCategoryComponent } from './components/pages/blog/categories/refinishing-floors-category/refinishing-floors-category.component';
import { StoneTitleCategoryComponent } from './components/pages/blog/categories/stone-title-category/stone-title-category.component';
import { VinylPlankCategoryComponent } from './components/pages/blog/categories/vinyl-plank-category/vinyl-plank-category.component';
import { SendEmailService } from './services/send-email.service';
import { ContactUsComponent } from './components/snippets/contact-us/contact-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { MultiStepFormComponent } from './components/snippets/multi-step-form/multi-step-form.component';
import { FreeQuoteComponent } from './components/pages/free-quote/free-quote.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AlpharettaComponent } from './components/pages/service-areas/alpharetta/alpharetta.component';
import { AtlantaComponent } from './components/pages/service-areas/atlanta/atlanta.component';
import { ServiceAreasParagraphComponent } from './components/snippets/service-areas-paragraph/service-areas-paragraph.component';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    Gt212VolcanicAshComponent,
    Gt213GeyerWalnutComponent,
    Gt215RiverCypressComponent,
    Gt216OldMasterComponent,
    Gt217OldCaptainComponent,
    Gt302RoseWoodComponent,
    Gt307BrazilianCherryComponent,
    Gt401GunstockHickoryComponent,
    Gt402ExpressoHickoryComponent,
    Gt403SunriseHickoryComponent,
    Gt404NightfallHickoryComponent,
    Gt405SunsetHickoryComponent,
    Gt406OliveComponent,
    Gt407ParkWalnutComponent,
    Gt409AcaciaNatureComponent,
    Gt410AcaciaWalnutComponent,
    Gt702GrandOakComponent,
    Gt703MahoganyComponent,
    Gt705BronzeOakComponent,
    Gt706WinchesterOakComponent,
    Gt707SilverMapleComponent,
    Gt708HeronOakComponent,
    Gt709WalnutOakComponent,
    Gt710ParkWalnutComponent,
    Vf001PrestigeComponent,
    Vf002RockportComponent,
    Vf003CocaBlossomComponent,
    Vf004AshfordComponent,
    Vf005OakComponent,
    Vf006AcaciaComponent,
    Wf601StoneGreyOakComponent,
    Wf602CountrysideOakComponent,
    Wf603RusticOakComponent,
    Wf604AlexaOakComponent,
    Wf605SpringfieldOakComponent,
    Wf606BlackstoneOakComponent,
    Wf801WesternOakComponent,
    Wf802NaturalWalnutComponent,
    Wf803CoffeeMapleComponent,
    Wf804AshOakComponent,
    Wf901AmberAcaciaComponent,
    Wf902NatureAcaciaComponent,
    Wf903BalsamComponent,
    Wf905DriftwoodOakComponent,
    Wf906TavernOakComponent,
    Wf907WillowOakComponent,
    Wf908FlintOakComponent,
    Wf909ClarionWoodComponent,
    Wf910HarvestWalnutComponent,
    Wf904SeabrookOakComponent,
    GalleryComponent,
    SolidWoodFlooringComponent,
    EngineeredWoodFlooringComponent,
    LaminateFlooringComponent,
    CorkFlooringComponent,
    BambooFlooringComponent,
    VinylPlankFlooringComponent,
    TestimonialsComponent,
    GoGreenComponent,
    BlogP1Component,
    BlogP2Component,
    SpcVinylFlooringComponent,
    LuxuryVinylPlanksFlooringInstallationComponent,
    ChoosingTheRightFloorFinishComponent,
    HurricaneHarveyFloorRepairComponent,
    NewThickerEngineeredFlooringComponent,
    HurricaneMatthewFloorRepairComponent,
    HandscrapedHardwoodFlooringComponent,
    BlogBambooFlooringComponent,
    NewTrendsInFlooringComponent,
    HardwoodFloorsLowVocsNoVocsComponent,
    FinishOrReplaceWoodFloorsComponent,
    DustlessSandingWoodFloorsComponent,
    BambooFlooringCategoryComponent,
    CorkFlooringCategoryComponent,
    EngineeredWoodCategoryComponent,
    HardwoodFlooringCategoryComponent,
    LaminateFlooringCategoryComponent,
    RefinishingFloorsCategoryComponent,
    StoneTitleCategoryComponent,
    VinylPlankCategoryComponent,
    ContactUsComponent,
    ContactComponent,
    MultiStepFormComponent,
    FreeQuoteComponent,
    NotFoundComponent,
    AlpharettaComponent,
    AtlantaComponent,
    ServiceAreasParagraphComponent,
    AthensComponent,
    BraseltonComponent,
    BufordComponent,
    ChateauElanComponent,
    ConcordeComponent,
    CummingComponent,
    DaculaComponent,
    DecaturComponent,
    DuluthComponent,
    DunwoodyComponent,
    FloweryBranchComponent,
    FortMillComponent,
    GainesvilleComponent,
    GalvestonComponent,
    HoschtonComponent,
    HoustonComponent,
    JacksonvilleComponent,
    JohnsCreekComponent,
    KennesawComponent,
    LilburnComponent,
    LoganvilleComponent,
    MariettaComponent,
    MiltonComponent,
    MyrtleBeachComponent,
    PalmValleyComponent,
    PeachtreeCornersComponent,
    PonteVedraComponent,
    RoswellComponent,
    SandySpringsComponent,
    SnellvilleComponent,
    OrangeParkComponent,
    OrlandoComponent,
    SmyrnaComponent,
    StAugustineComponent,
    SugarHillComponent,
    SuwaneeComponent,
    TuckerComponent,
    ViningsComponent,
    WinterParkComponent,
    CouponComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    DatepickerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    SendEmailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

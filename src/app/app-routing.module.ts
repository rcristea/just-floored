import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { EngineeredComponent } from './components/pages/engineered/engineered.component';
import { FloorsComponent } from './components/pages/floors/floors.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LaminateComponent } from './components/pages/laminate/laminate.component';
import { ServicesComponent } from './components/pages/services/services.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'floors', component: FloorsComponent },
  { path: 'engineered', component: EngineeredComponent },
  { path: 'laminate', component: LaminateComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

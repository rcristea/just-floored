import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainImageComponent } from './components/main-image/main-image.component';
import { MainInfoComponent } from './components/main-info/main-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainImageComponent,
    MainInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

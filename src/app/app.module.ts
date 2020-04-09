import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TerreoComponent } from './terreo/terreo.component';
import { NadoComponent } from './nado/nado.component';
import { EldealbertoComponent } from './eldealberto/eldealberto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RestaurantsComponent,
    TerreoComponent,
    NadoComponent,
    EldealbertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

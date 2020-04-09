import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ContactComponent } from './contact/contact.component';
import { TerreoComponent } from './terreo/terreo.component';
import { NadoComponent } from './nado/nado.component';
import { EldealbertoComponent } from './eldealberto/eldealberto.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'restaurantes', component: RestaurantsComponent },
  { path: 'terreo', component: TerreoComponent },
  { path: 'restaurantes/terreo', component: TerreoComponent },
  { path: 'nado', component: NadoComponent },
  { path: 'restaurantes/nado', component: NadoComponent },
  { path: 'el_de_alberto', component: EldealbertoComponent },
  { path: 'restaurantes/el_de_alberto', component: EldealbertoComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

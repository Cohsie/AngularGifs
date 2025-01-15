import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { HelpersComponent } from './helpers/helpers.component';
import { PagesComponent } from './pages/pages.component';
import { ServicesComponent } from './services/services.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    HelpersComponent,
    PagesComponent,
    ServicesComponent,
    HomePageComponent,
    CardListComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }

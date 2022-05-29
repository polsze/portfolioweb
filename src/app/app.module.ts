import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { Contenedor1Component } from './componentes/contenedor1/contenedor1.component';
import { Contenedor2Component } from './componentes/contenedor2/contenedor2.component';
import { Contenedor3Component } from './componentes/contenedor3/contenedor3.component';
import { Contenedor4Component } from './componentes/contenedor4/contenedor4.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Contenedor5Component } from './componentes/contenedor5/contenedor5.component';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Contenedor1Component,
    Contenedor2Component,
    Contenedor3Component,
    Contenedor4Component,
    FooterComponent,
    Contenedor5Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

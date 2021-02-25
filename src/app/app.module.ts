import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//cmponentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
//Rutas
import { AppRoutingModule } from './app.routing.module';
//pipes
import { PipeImagePipe } from './shared/pipe-image.pipe';

import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './shared/domseguro.pipe';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    PipeImagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

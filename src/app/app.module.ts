import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-pages/home-page/home-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { AnimeDetailPageComponent } from './pages/anime-detail-page/anime-detail-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnimePageComponent,
    AnimeDetailPageComponent,
    HeaderComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

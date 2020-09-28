import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkComponent } from './work/work.component';
import { WorkCardComponent } from './work/work-card/work-card.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosComponent } from './photos/photos.component';
import { MonoscapesComponent } from './photos/monoscapes/monoscapes.component';
import { FranceColorComponent } from './photos/france-color/france-color.component';
import { FranceBwComponent } from './photos/france-bw/france-bw.component';
import { SummerComponent } from './photos/summer/summer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WorkComponent,
    WorkCardComponent,
    PageHeaderComponent,
    AboutComponent,
    FooterComponent,
    PhotosComponent,
    MonoscapesComponent,
    FranceColorComponent,
    FranceBwComponent,
    SummerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

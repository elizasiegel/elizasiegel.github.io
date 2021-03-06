import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import {AboutComponent} from './about/about.component';
import {PhotosComponent} from './photos/photos.component';
import {MonoscapesComponent} from './photos/monoscapes/monoscapes.component';
import {FranceColorComponent} from './photos/france-color/france-color.component';
import {FranceBwComponent} from './photos/france-bw/france-bw.component';
import {SummerComponent} from './photos/summer/summer.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'landing', component: LandingComponent},
  /*{ path: 'work', component: HomeComponent },*/
  { path: 'about', component: AboutComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'moonscapes', component: MonoscapesComponent},
  { path: 'pale-sunset', component: FranceColorComponent},
  { path: 'paris-coast', component: FranceBwComponent},
  { path: 'small-elations', component: SummerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

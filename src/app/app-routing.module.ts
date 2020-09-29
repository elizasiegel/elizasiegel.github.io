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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent},
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
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

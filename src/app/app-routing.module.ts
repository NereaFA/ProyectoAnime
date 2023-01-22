import { AnimePageComponent } from './pages/anime-page/anime-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-pages/home-page/home-page.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "anime", component: AnimePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


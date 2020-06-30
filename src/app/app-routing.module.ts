import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ViewMovieComponent } from './components/view-movie/view-movie.component';


const routes: Routes = [
  { path: '', redirectTo: 'movies-list', pathMatch: 'full' },
  { path: 'movies-list', component: ListMoviesComponent },
  { path: 'add', component: AddMovieComponent },
  { path: 'edit/:id', component: EditMovieComponent },
  { path: 'view/:id', component: ViewMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

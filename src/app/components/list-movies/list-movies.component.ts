import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/service/movie-data.service';
import { Movie } from 'src/app/model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[];

  constructor(
    private serv: MovieDataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable() {
    this.serv.getAllMovies().subscribe(
      response => {
        console.log(response);
        this.movies = response;
      },
      err => {
        console.log(err);
      }
    );
  }

  addMovie() {
    this.router.navigate(['add']);
  }

  editMovie(id: number) {
    this.router.navigate(['edit', id]);
  }

  viewMovie(id: number) {
    this.router.navigate(['view', id])
  }

  deleteMovie(id: number) {
    this.serv.deleteMovie(id).subscribe(
      res => {
        this.refreshTable();
      }
    )
  }

}

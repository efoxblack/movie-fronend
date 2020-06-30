import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { Router } from '@angular/router';
import { MovieDataService } from 'src/app/service/movie-data.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie = new Movie();

  constructor(
    private router: Router,
    private serv: MovieDataService
  ) { }

  ngOnInit(): void {
  }

  submitMovie() {
    this.serv.addMovie(this.movie).subscribe(
      res => {
        this.router.navigate(['movies-list']);
      },
      err => console.log(err)
    )
  }

  goBackToList() {
    this.router.navigate(['movies-list']);
  }

}

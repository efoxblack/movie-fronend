import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieDataService } from 'src/app/service/movie-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie = new Movie();

  id: number;

  constructor(
    private serv: MovieDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.serv.getMovieById(this.id).subscribe(
      res => {
        this.movie = res;
      },
      err => console.log(err)
    )
  }
  
  editMovie() {
    this.serv.editMovie(this.id, this.movie).subscribe(
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

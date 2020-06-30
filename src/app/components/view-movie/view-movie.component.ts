import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieDataService } from 'src/app/service/movie-data.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  movie = new Movie();

  id: number;

  constructor(
    private router: Router,
    private serv: MovieDataService,
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

  goBackToList() {
    this.router.navigate(['movies-list']);
  }
}

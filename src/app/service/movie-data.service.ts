import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';
import { API_URL } from '../app.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${API_URL}/movies`);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${API_URL}/movies/${id}`);
  }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post(`${API_URL}/movies`, movie);
  }

  editMovie(id: number, movie: Movie): Observable<any> {
    return this.http.put(`${API_URL}/movies/${id}`, movie);
  }

  deleteMovie(id: number) {
    return this.http.delete(`${API_URL}/movies/${id}`);
  }

}

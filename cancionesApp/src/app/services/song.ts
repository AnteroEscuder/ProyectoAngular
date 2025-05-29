import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'https://api.deezer.com/search?q=';
  private proxy = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  searchSongs(query: string): Observable<Song[]> {
    const url = `${this.proxy}${this.apiUrl}${query}`;
    return this.http.get<any>(url).pipe(map(res => res.data));
  }

  getSongById(id: string) {
    const url = `${this.proxy}https://api.deezer.com/track/${id}`;
    return this.http.get<any>(url);
  }

  getArtistById(id: string) {
    const url = `${proxy}https://api.deezer.com/artist/${id}`;
    return this.http.get<any>(url);
  }

  getArtistTopTracks(id: string) {
    const url = `${proxy}https://api.deezer.com/artist/${id}/top?limit=5`;
    return this.http.get<any>(url);
  }


}

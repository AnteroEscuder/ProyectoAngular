import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song';
import { Song } from '../../models/song';
import { FavoritesService } from '../../services/favorites';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-song-list',
  imports: [
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.scss']
})
export class SongList implements OnInit {
  songs: Song[] = [];
  query: string = 'queen';

  constructor(
    private songService: SongService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.searchSongs();
  }

  searchSongs(): void {
    if (this.query.trim()) {
      this.songService.searchSongs(this.query).subscribe(data => {
        console.log(data)
        this.songs = data;
      });
    }
  }

  filterSongsByName(type: string): void {
    if (type === 'asc') {
      this.songs.sort((a,b) => a.title.localeCompare(b.title));
    } else  {
      this.songs.sort((a,b) => b.title.localeCompare(a.title));
    }
  }

  toggleFavorite(song: Song): void {
    this.favoritesService.toggleFavorite(song);
  }
}

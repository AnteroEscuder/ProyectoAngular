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
  tempSongs: Song[] = [];
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
        this. tempSongs = data;
        this.checkFavorites();
        this.songs = this.tempSongs;
      });
    }
  }

  checkFavorites() {
    const favorites = this.favoritesService.getFavorites();
    const favoriteIds = new Set(favorites.map(f => f.id));

    this.tempSongs.forEach(song => {
      song.fav = favoriteIds.has(song.id);
    });
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

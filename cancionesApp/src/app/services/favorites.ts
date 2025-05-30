import { Injectable } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites: Song[] = [];

  constructor() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }

  toggleFavorite(song: Song): void {
    const index = this.favorites.findIndex(fav => fav.id === song.id);
    if (index === -1) {
      this.favorites.push(song);
    } else {
      this.favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  isFavorite(songId: number): boolean {
    return this.favorites.some(song => song.id === songId);
  }

  getFavorites(): Song[] {
    return this.favorites;
  }
}

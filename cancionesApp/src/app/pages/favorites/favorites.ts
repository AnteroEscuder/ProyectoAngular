import {Component, OnInit} from '@angular/core';
import { FavoritesService } from '../../services/favorites';
import { Song } from '../../models/song';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss'
})
export class Favorites implements OnInit {
  favorites: Song[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favorites = this.favoritesService.getFavorites();
  }

  toggleFavorite(song: Song) {
    this.favoritesService.toggleFavorite(song);
    this.favorites = this.favoritesService.getFavorites(); // Actualizar lista
  }
}

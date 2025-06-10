import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../../services/auth';
import {ThemeService} from '../../services/theme';
import {SongService} from '../../services/song';
import {Song} from '../../models/song';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  imports: [
    RouterLink,
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  query: string = '';
  songs: Song[] = [];
  filteredSongs: Song[] = [];

  constructor(private auth: AuthService, private router: Router, private themeService: ThemeService, private  songService: SongService) {}

  onSearch(): void {
    if (this.query.trim()) {
      this.songService.searchSongs(this.query.trim()).subscribe((data) => {
        this.filteredSongs = data;
      });
    } else {
      this.filteredSongs = [];
    }
  }

  closeDropdown(songId: number): void {
    this.router.navigate(['/songs', songId]);
    this.filteredSongs = [];
  }


  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  changeTheme() {
    this.themeService.toggleTheme()
  }

}

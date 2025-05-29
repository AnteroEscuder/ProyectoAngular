import {Component, OnInit} from '@angular/core';
import {SongService} from '../../services/song';
import { Song } from '../../models/song';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './song-list.html',
  styleUrl: './song-list.scss'
})
export class SongList implements OnInit {
  songs: Song[] = [];
  query: string = 'queen';

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.searchSongs();
  }

  searchSongs(): void {
    if (this.query.trim()) {
      this.songService.searchSongs(this.query).subscribe(data => {
        this.songs = data;
        console.log(this.songs);
      });
    }
  }
}

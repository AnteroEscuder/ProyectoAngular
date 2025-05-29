import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../models/song';
import {SongService} from '../../services/song';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-song-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-detail.html',
  styleUrl: './song-detail.scss'
})
export class SongDetail implements OnInit {
  song: Song | undefined;
  isLoading = true;
  hasError = false;

  showArtistModal = false;
  artist: any;
  topTracks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.songService.getSongById(id).subscribe({
        next: (data) => {
          if (data && !data.error) {
            this.song = data;
          } else {
            this.hasError = true;
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.hasError = true;
          this.isLoading = false;
        }
      });
    }
  }

  openArtistModal(artistId: number) {
    this.showArtistModal = true;

    this.songService.getArtistById(artistId.toString()).subscribe(data => {
      this.artist = data;
    });

    this.songService.getArtistTopTracks(artistId.toString()).subscribe(data => {
      this.topTracks = data.data;
    });
  }

  closeArtistModal() {
    this.showArtistModal = false;
  }

}

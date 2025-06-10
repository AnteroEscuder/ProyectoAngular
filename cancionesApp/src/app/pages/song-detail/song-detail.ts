import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Song} from '../../models/song';
import {SongService} from '../../services/song';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-song-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-detail.html',
  styleUrl: './song-detail.scss'
})
export class SongDetail implements OnInit, OnDestroy {
  song: Song | undefined;
  isLoading = true;
  hasError = false;
  showArtistModal = false;
  artist: any;
  topTracks: any[] = [];
  artistError = false;
  private routerSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) {
  }

  ngOnInit(): void {
    // const songId = this.route.snapshot.paramMap.get('id');
    // if (songId) {
    //   this.loadSongDetails(songId);
    // } else {
    //   this.hasError = true;
    //   this.isLoading = false;
    // }
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadSongDetails(id)
      }
    })
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  loadSongDetails(id: string): void {
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

  openArtistModal(artistId: number): void {
    this.showArtistModal = true;
    this.artistError = false;

    this.songService.getArtistById(artistId.toString()).subscribe({
      next: (data) => {
        this.artist = data;
      },
      error: (err) => {
        console.error(err);
        this.artistError = true;
      }
    });

    this.songService.getArtistTopTracks(artistId.toString()).subscribe({
      next: (data) => {
        this.topTracks = data.data;
      },
      error: (err) => {
        console.error(err);
        this.artistError = true;
      }
    });
  }

  closeArtistModal(): void {
    this.showArtistModal = false;
  }
}

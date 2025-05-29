import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SongService} from '../../services/song';
import {ModalReproductor} from '../../components/modal-reproductor/modal-reproductor';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalReproductor],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  topSongs: any[] = [];
  featured: any[] = [];
  selectedSong: any = null;
  showModal = false;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songService.getTopSongs().subscribe(data => {
      this.topSongs = data.data.slice(0, 10);
      this.featured = data.data.slice(0, 5);
    });
  }

  abrirModal(song: any) {
    this.selectedSong = song;
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
  }

}

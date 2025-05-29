import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {SongList} from './pages/song-list/song-list';
import {SongDetail} from './pages/song-detail/song-detail';
import {Contact} from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'songs', component: SongList },
  { path: 'songs/:id', component: SongDetail },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];

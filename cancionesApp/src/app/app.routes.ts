import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {SongList} from './pages/song-list/song-list';
import {SongDetail} from './pages/song-detail/song-detail';
import {Contact} from './pages/contact/contact';
import {Login} from './pages/login/login';
import {LoginGuard} from './guards/login-guard';
import {AuthGuard} from './guards/auth-guard';
import {Favorites} from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', component: Home, canActivate: [AuthGuard] },
  { path: 'songs', component: SongList, canActivate: [AuthGuard] },
  { path: 'songs/:id', component: SongDetail, canActivate: [AuthGuard] },
  { path: 'contact', component: Contact, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: Login,
    canActivate: [LoginGuard]
  },
  { path: 'favorites', component: Favorites, canActivate: [AuthGuard] },
  {path: '**', redirectTo: ''}
];

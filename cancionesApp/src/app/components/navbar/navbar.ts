import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { AuthService } from '../../services/auth';
import {ThemeService} from '../../services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  constructor(private auth: AuthService, private router: Router, private themeService: ThemeService) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  changeTheme() {
    this.themeService.toggleTheme()
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeClass = 'dark-theme';

  enableDarkTheme() {
    document.body.classList.add(this.darkThemeClass);
    localStorage.setItem('theme', 'dark');
  }

  disableDarkTheme() {
    document.body.classList.remove(this.darkThemeClass);
    localStorage.setItem('theme', 'light');
  }

  toggleTheme() {
    if (document.body.classList.contains(this.darkThemeClass)) {
      this.disableDarkTheme();
    } else {
      this.enableDarkTheme();
    }
  }

  loadTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.enableDarkTheme();
    } else {
      this.disableDarkTheme();
    }
  }
}

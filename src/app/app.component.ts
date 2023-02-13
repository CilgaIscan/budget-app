import { Component, OnInit } from '@angular/core';
import { AuthService } from './pages/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Budget App';
  user: any;

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
  }

  public toggleLanguage() {
    const selectedLang = localStorage.getItem('locale');
    if (!selectedLang || selectedLang === 'en') {
      localStorage.setItem('locale', 'tr')
    } else {
      localStorage.setItem('locale', 'en');
    }
    window.location.reload();
  }

  public get isAuthorized() {
    return this.authService.isAuthorized();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: any;

  constructor(private readonly router: Router, private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthorized();
    this.loadUser();
  }

  public isAuthorized() {
    return this.authService.isAuthorized();
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

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }

  public logOut() {
    this.authService.logout();
    this.navigateTo('/');
  }

  private loadUser() {
    this.authService.me().subscribe((user) => this.user = user);
  }
}

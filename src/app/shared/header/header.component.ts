import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public toggleLanguage() {
    const selectedLang = localStorage.getItem('locale');
    if (!selectedLang || selectedLang === 'en') {
      localStorage.setItem('locale', 'tr')
    } else {
      localStorage.setItem('locale', 'en');
    }
    window.location.reload();
  }
}

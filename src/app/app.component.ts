import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Budget App';

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

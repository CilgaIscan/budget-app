import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    this.loadUser();
  }

  private loadUser() {
    this.authService.me().subscribe((user) => {
      this.user = user;
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName: string;

  constructor(
    private router: Router) {}
  
  nameChanged(name: string) {
    this.userName = name;
    this.router.navigate(['/users', this.userName]);
  }
}

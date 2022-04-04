import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  enteredName = "";
  enteredPassword = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClick(): void {
    if (this.enteredName === "Derrilby" && this.enteredPassword === "Blueberry") {
      this.router.navigate(['./home']);
    }
  }
}

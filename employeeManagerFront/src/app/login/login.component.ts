import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService , private routs : Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
        console.log(data);
        console.log("tookeenn "+this.storageService.getUser().accessToken)
        localStorage.setItem('token',this.storageService.getUser().accessToken);

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      
    });
    if (this.isLoginFailed==false){  this.routs.navigate(['/home'])}
   

  }


  reloadPage(): void {
    window.location.reload();
  }
}

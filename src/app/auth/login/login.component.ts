import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { response } from 'express';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  constructor(private authService:AuthService,
    private snackBar: MatSnackBar, 
    private cookieService: CookieService, 
    private route:Router
  ){ 
    

  }
  // Your logic here 
  email='';
  password='';  
  Signup(){
    this.route.navigate(['/signup'])
  }
  onLogin(){
    console.log("Login Click successfully") 
    console.log("Email",this.email); 
    console.log("Password",this.password)  
    const loginData={
      email:this.email, 
      password:this.password
    }
this.authService.login(loginData).subscribe({
  next: (response) => {
    this.cookieService.set('authToken', response.token, 7)
        this.snackBar.open('Login successful!', 'Close', {
      duration: 3000, // Duration in ms
      panelClass: ['success-snackbar'], // Optional: Add custom styling for success
    });
this.route.navigate(['/dashboard'])
    console.log(response);
  },
  error: (error) => {  
    console.log(error.error.message,"error")
         this.snackBar.open(error.error.message, 'Close', {
      duration: 3000, // Duration in ms
      panelClass: ['success-snackbar'], // Optional: Add custom styling for success
    });
    console.error(error);
  },
  complete: () => {
    console.log('Login request completed.');
  }
});


  } 
}

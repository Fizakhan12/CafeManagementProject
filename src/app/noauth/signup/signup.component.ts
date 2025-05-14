import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { NoauthService } from '../../noauth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatCard,  MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      FormsModule,
    CommonModule  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {  
    name!:string; 
  email!:string; 
  password!:string; 
  contactNumber!:string; 
step =1;
  constructor(private route:Router, 
    private noauth:NoauthService , 
    private snackBar:MatSnackBar
  ){

  }
  ngOnInit(): void {
    this.step =1 ;
    console.log('SignupComponent initialized');
    // You can initialize default values or call services here
  }
 signup(){ 
  const request={
    email:this.email, 
    name:this.name, 
    password:this.password, 
    contactNumber:this.contactNumber
  } 
  this.noauth.signup(request).subscribe({
next:(response)=>{  
  this.step=2;
this.snackBar.open("Sign Up Successfully","close",{
  duration: 3000, // Duration in ms
      panelClass: ['success-snackbar'],
  })
}, 
error:(error)=>{
  this.snackBar.open(error.error.message,'close',{
  duration: 3000, // Duration in ms
      panelClass: ['success-snackbar'],
  })
}



  })
  console.log('Signup Button Click')
 } 
 login(){
this.route.navigate(['/login'])
 }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashoboardComponent } from './auth/dashoboard/dashoboard.component';
import { SignupComponent } from './noauth/signup/signup.component';

export const routes: Routes = [
    {
        path:'login', 
        component:LoginComponent
    }, 
    {
        path:'dashboard', 
        component:DashoboardComponent
    }, {
        path:'signup', 
        component:SignupComponent
    }
];

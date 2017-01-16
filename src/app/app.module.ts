import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";
import { SigninComponent } from './unprotected/signin.component';
import { HeaderComponent } from './shared/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtectedComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, HttpModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RandomUserComponent } from './random-user/random-user.component';
import { UserdataService } from './userdata.service';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RandomUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterOutlet
  ],
  providers: [UserServiceService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

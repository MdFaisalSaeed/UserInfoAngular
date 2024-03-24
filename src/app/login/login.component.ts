import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';
import { UserModel } from '../userModel';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userInfo: any;
  userName: string;
  password: string;
  errors:string;
  public userModel: UserModel;
  constructor(private userService: UserServiceService,private route: ActivatedRoute,private router:Router,private userDataService:UserdataService) {
    this.userModel = new UserModel();
    this.userName = "";
    this.password = "";
  }

  OnSubmit() {
    this.userModel.UserName = this.userName;
    this.userModel.Password = this.password;
    this.userService.getUserInfo(this.userModel).subscribe((data: any) => { 
      this.userDataService.userData=data.results[0];
      this.router.navigate(['../random-user']);
    } 
    ,
      error => {
        this.errors = "Incorrect user name and password.";
      });
  }
}

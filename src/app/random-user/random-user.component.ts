import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent  {
  
public userDetails:any;
public Name:string;
public Title:string;
public Gender:string;
public Cell:string;
public Phone: string;
public Email:string;
public Picture: string;
  constructor(private userDataService:UserdataService)
  {
    this.userDetails=userDataService.userData;
    this.Name=this.userDetails.name.first+" "+this.userDetails.name.last;
    this.Title=this.userDetails.name.title;
    this.Gender=this.userDetails.gender;
    this.Cell=this.userDetails.cell;
    this.Phone=this.userDetails.phone;
    this.Email=this.userDetails.email;
    this.Picture=this.userDetails.picture.medium;

  }
}

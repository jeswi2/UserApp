import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myrouter:Router) { }
  
  name=""
  password=""

  readValues=()=>{
    let data={
      "name":this.name,
      "password":this.password
    }
    if ( this.name=="admin" && this.password=="12345") {
  this.myrouter.navigate(["/dashboard"])
  } else {

    alert("invalid")

  }
    console.log(data)
  }


  ngOnInit(): void {
  }
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }


name=""
number=""
gender=""
email=""
address=""
pin=""
blood=""
dob=""
age=""
paname=""
password=""
confirmpass=""

readValues=()=>{
  let data={
    "name":this.name,
"number":this.number,
"gender":this.gender,
"email":this.email,
"address":this.address,
"pin":this.pin,
"blood":this.blood,
"dob":this.dob,
"age":this.age,
"paname":this.paname,
"password":this.password,
"confirmpass":this.confirmpass
  }
  console.log(data)
}





  ngOnInit(): void {
  }

}

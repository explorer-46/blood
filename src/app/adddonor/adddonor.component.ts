import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrls: ['./adddonor.component.css']
})
export class AdddonorComponent implements OnInit {

  constructor() { }

  name=""
  blood=""
  dob=""
  lDate=""
  anyD=""
  vacDate=""
  address=""
  phone=""
  pinCode=""
  email=""

readValue=()=>{

  let data={
    "name":this.name,
    "blood":this.blood,
    "dob":this.dob,
    "lDate":this.lDate,
    "anyD":this.anyD,
    "vacDate":this.vacDate,
    "address":this.address,
    "phone":this.phone,
    "pinCode":this.pinCode,
    "email":this.email
  
  }
  console.log(data)

  
}








  ngOnInit(): void {
  }

}

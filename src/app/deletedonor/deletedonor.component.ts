import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedonor',
  templateUrl: './deletedonor.component.html',
  styleUrls: ['./deletedonor.component.css']
})
export class DeletedonorComponent implements OnInit {

  constructor() { }

  donorName=""

  read=()=>{
    let data={
      "donorName":this.donorName
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}

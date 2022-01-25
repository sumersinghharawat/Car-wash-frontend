import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  CustomerData:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("userData")){
      let data = localStorage.getItem("userData")
      if(data){
        this.CustomerData = JSON.parse(data)
      }
    }else{
      this.router.navigate(['/customer-login'])
    }
  }
}

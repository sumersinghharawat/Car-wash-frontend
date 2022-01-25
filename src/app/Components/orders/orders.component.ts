import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/Service/data-access.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  Orders:any;
  apiUrl: string = environment.url;
  warning: string = "";
  constructor(private apis:DataAccessService) { }

  ngOnInit(): void {
    this.warning = "Waiting..."
    // https://rj19carwash.com/api/transaction/1
    let data = localStorage.getItem("userData");
    if(data){
      let CustomerData = JSON.parse(data).id;
      let CustomerId = JSON.parse(data).id;
      this.apis.Get("api/orders/"+CustomerId).subscribe((Orders:any)=>{
        this.warning = ""
        if(Orders.data.length > 0){
          this.Orders =  Orders.data
        }else{
          this.warning = "You don't have any orders"
        }
      },(err)=>{
        console.log(err)
      })
    }
  }

}

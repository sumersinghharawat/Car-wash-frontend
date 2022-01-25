import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/Service/data-access.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  data: any;
  service: any;
  constructor(private apis: DataAccessService) {

    let data: any = localStorage.getItem("order_options");
    this.data = JSON.parse(data);

  }

  ngOnInit(): void {
    this.apis.Get('api/viewservice/' + this.data.category + '/' + this.data.service).subscribe((n: any) => {
      this.service = n.Service[0];
      console.log(this.service)
      console.log(this.data)

      if (localStorage.getItem("id") == "") {
        setTimeout(() => {
          window.location.href = window.location.href
        }, 2000)
      }
    })



    let ordernow = {
      "price": 0,
      "service_id": "",
      "customer_id": "",
      "id": ""
    };

    let id: any
    if (localStorage.getItem("id")) {
      id = localStorage.getItem("id")
    }

    ordernow.id = id;
    ordernow.price = (this.data.amount) / 100
    ordernow.customer_id = this.data.customer.id
    ordernow.service_id = this.data.service

    console.log(ordernow)

    this.apis.Post('api/order-now', ordernow).subscribe((res: any) => {
      localStorage.setItem("id", res.data.id)
    });
  }

}

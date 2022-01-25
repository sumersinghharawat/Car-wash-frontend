import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/Service/data-access.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  Transactions:any;
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
      this.apis.Get("api/transaction/"+CustomerId).subscribe((transactions:any)=>{
        this.warning = ""
        this.Transactions =  transactions.data
      },(err)=>{
        console.log(err)
      })
    }

  }

}

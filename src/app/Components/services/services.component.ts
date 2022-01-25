import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/Service/data-access.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  envi: string = "";
  services: any = [];
  constructor(private apis:DataAccessService,private router:Router) { }

  ngOnInit(): void {

    if(!localStorage.getItem("userData")){
      this.router.navigate(['/home'])
    }else{
      let categoryId = this.apis.category.value;
      this.apis.Get('api/viewservice/'+categoryId).subscribe((n: any) => {
        this.envi = environment.Store;
        this.services = n.Services;
      })
    }
  }

  OnClick(serviceId: any) {
    this.apis.service.next(serviceId)
    this.router.navigate(['/services'])
  }

  bookNow(ServiceId:any){
    this.apis.service.next(ServiceId)
    this.router.navigate(['booking'])
  }
}

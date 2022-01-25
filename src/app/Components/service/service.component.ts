import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataAccessService } from 'src/app/Service/data-access.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  serviceId: string = "";
  envi: string = "";
  service: any = [];
  constructor(private route:ActivatedRoute,private apis:DataAccessService,private router:Router) { }

  ngOnInit(): void {
    
    if(!localStorage.getItem("userData")){
      this.router.navigate(['/home'])
    }

    this.serviceId = this.route.snapshot.params.id;
    let categoryId = this.apis.category.value;
    
    this.apis.Get('api/viewservice/'+categoryId+'/'+this.serviceId).subscribe((n: any) => {
      this.envi = environment.Store;
      this.service = n.Service[0];
    })

  }

  booknow(ServiceId:any){
    this.apis.service.next(ServiceId)
    this.router.navigate(['booking'])
  }
}

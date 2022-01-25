import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/Service/data-access.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  envi: string = "";
  subcategories: any = [];
  message:string = "";
  constructor(private apis: DataAccessService, private router: Router) { }

  ngOnInit(): void {
    this.message = "waiting..."
    if(!localStorage.getItem("userData")){
      this.router.navigate(['/home'])
    } else {
      let categoryId = localStorage.getItem("category");
      this.apis.Get('api/categories/' + categoryId).subscribe((n: any) => {
        this.envi = environment.Store;
        this.subcategories = n.subcategories
        if(this.subcategories.length <= 0){
          this.message = "No SubCategory Found"
        } 
      },(err)=>{
        this.message = "Error"
      })
    }
  }

  OnClick(categoryId: any) {
    this.apis.category.next(categoryId)
    this.router.navigate(['/services'])
  }
}

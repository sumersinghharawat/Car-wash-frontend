import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/Service/data-access.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any;
  envi : string = "";
  constructor(private apis:DataAccessService,private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("userData")){
      this.router.navigate(['/home'])
    }

    this.apis.Get('api/categories').subscribe((n:any)=>{
      this.envi = environment.Store;
      this.categories = n.categories
    })
  }
  
  OnClick(categoryId:any){
    localStorage.setItem("category",categoryId)
    this.router.navigate(['/subcategory'])
  }
}

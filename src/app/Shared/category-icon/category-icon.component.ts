import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.scss']
})
export class CategoryIconComponent implements OnInit {

  env: string = "";
  
  @Input() public CategoryId : string = "";
  @Input() public CategoryImage : string = "";
  @Input() public CategoryName : string = "";
  constructor() { }
  ngOnInit(): void {
    this.env = environment.Store;
  }

}

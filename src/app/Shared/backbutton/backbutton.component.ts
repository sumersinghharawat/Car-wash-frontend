import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss']
})
export class BackbuttonComponent implements OnInit {
  
  
  @Input() public backbutton: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  OnClick(){
    alert()
  }

}

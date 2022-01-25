import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-icon',
  templateUrl: './service-icon.component.html',
  styleUrls: ['./service-icon.component.scss']
})
export class ServiceIconComponent implements OnInit {

  @Input() public ServiceId: string = ""; 
  @Input() public ServiceName: string = ""; 
  @Input() public SerivceImage: string = ""; 
  @Input() public ServiceDescription: string = ""; 
  @Input() public ServicePrice: string = ""; 
  @Input() public ServiceDisPrice: string = ""; 
  @Input() public ServiceTime: string = ""; 
  envi: string  = "";

  @Output() public selectService : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.envi = environment.Store;
  }

  bookNow(ServiceId:any){
    this.selectService.emit(ServiceId);
  }

}

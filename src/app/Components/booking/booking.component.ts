import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/Service/data-access.service';
import { environment } from 'src/environments/environment';

declare let Razorpay: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private router: Router, private apis: DataAccessService, private location: Location) { }

  booking: FormGroup | any;
  validationField: boolean = false;
  validationFieldType: string = "";
  validationFieldMessage: string = "";
  service: any = [];
  name: string = "";
  email: string = "";
  address: string = "";
  Customerdata = {
    "phone": "",
    "address": "",
    "email": "",
    "name": "",
    "id":"",
    "amount":""
  }
  ngOnInit(): void {
    let categoryId = this.apis.category.value
    let serviceId = this.apis.service.value
    let customer = this.apis.customer.value
    if(!customer){
      customer = {
        "amount":""
      }
    }
    if (categoryId == null) {
      this.router.navigate(['/home'])
    }



    this.apis.Get('api/viewservice/' + categoryId + '/' + serviceId).subscribe((n: any) => {
      customer?.amount
      this.service = n.Service[0];
      if(this.service){
        customer.amount = this.service.discountprice ? this.service.discountprice : this.service.price
        // this.booking.patchValue(customer)

        let data = localStorage.getItem("userData")
        if (data) {
          this.Customerdata.name = JSON.parse(data).name;
          this.Customerdata.phone = JSON.parse(data).phone;
          this.Customerdata.email = JSON.parse(data).email;
          this.Customerdata.address = JSON.parse(data).address;
          this.Customerdata.id = JSON.parse(data).id;
          this.Customerdata.amount = customer.amount;          

          if (this.Customerdata) {
            this.booking.patchValue(this.Customerdata)
          }
        }
      }
    })
    this.initializeForm()
  }


  initializeForm() {

    this.booking = new FormGroup({
      id: new FormControl(''),
      phone: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      amount: new FormControl('')
    })
  }

  show() {

    this.validationField = true;
    this.validationFieldType = "warning";
    this.validationFieldMessage = "Please wait...";

    let base_url = environment.url

    if (this.booking.valid) {
      delete this.booking.amount;
      this.apis.Post('api/updateprofile', this.booking.value).subscribe((res: any) => {

        this.validationField = true;
        this.validationFieldType = "success";
        this.validationFieldMessage = res.message;
        this.apis.customer.next(res.data.profile)
        this.booking.patchValue(this.apis.customer.value)

        this.removealert(3000);
        setTimeout(() => {

        }, 3000)



        this.razerPayNow()

      }, (err) => {

        this.removealert(3000);
        this.validationField = true;
        this.validationFieldType = "danger";

        if (err.error.errors.address != undefined) {
          this.validationFieldMessage = err.error.errors.address[0];
        }

        if (err.error.errors.email != undefined) {
          this.validationFieldMessage = err.error.errors.email[0];
        }

        if (err.error.errors.name != undefined) {
          this.validationFieldMessage = err.error.errors.name[0];
        }

        if (err.error.errors.phone != undefined) {
          this.validationFieldMessage = err.error.errors.phone[0];
        }
      })
    }

    // this.lockerservice.locationId.next(this.locationId);
    // this.router.navigate(['/category'])
  }

  removealert(time: any) {
    setTimeout(() => {
      this.validationField = false;
      this.validationFieldType = "";
      this.validationFieldMessage = "";
    }, time)

  }

  razerPayNow() {

    let order = this.booking.value

    const options: any = {
      // key: 'rzp_live_lGugoSh169nHiU',
      key: 'rzp_test_09poqwe9rjAIoS',
      amount: parseInt(order.amount) * 100,
      currency: 'INR',
      name: order.name,
      description: 'RJ19 Car Wash Service',
      image: this.location.prepareExternalUrl('/logo.png'),
      order_id: "", // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#ff0000'
      }
    };
    options.handler = ((response: any, error: any) => {
      options.response = response;
      if (response) {
        options.service = this.apis.service.value;
        options.category = this.apis.category.value;
        options.customer = this.apis.customer.value;
        localStorage.setItem("order_service", JSON.stringify(this.apis.service.value))
        localStorage.setItem("order_options", JSON.stringify(options))

        if (localStorage.getItem("order_options")) {
          this.router.navigate(['order']);
        }
      }
    });
    options.modal.ondismiss = (() => {
      this.router.navigate(['home'])
      console.log('Transaction cancelled.');
    });
    const rzp = new Razorpay(options);
    rzp.open();
  }
}

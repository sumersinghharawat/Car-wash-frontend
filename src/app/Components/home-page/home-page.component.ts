import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/Service/data-access.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private apis: DataAccessService) { }
  booking: FormGroup | any;
  validationField: boolean = false;
  validationFieldType: string = "";
  validationFieldMessage: string = "";
  validationMapping: any = {
    // 'date': { required: "Date is required" },
    'phone': { required: "Phone number is required" }
  };
  backbutton: boolean = false;
  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.booking = new FormGroup({
      phone: new FormControl('', [Validators.required])
    })
  }

  GetErrorsFromFormGroup(formgroup: FormGroup, errorMapping: any) {
    var Errors: any = [];
    Object.keys(formgroup.controls).forEach(key => {
      const controlErrors: any = formgroup.get(key)?.errors;
      if (controlErrors != null) Object.keys(controlErrors).forEach(keyError => {
        Errors[key] = errorMapping[key][keyError];
      });
    });

    return Errors;
  }

  show() {

    this.validationField = true;
    this.validationFieldType = "warning";
    this.validationFieldMessage = "Please wait...";
    let base_url = environment.url

    if (this.booking.valid) {

      this.apis.Post('api/customer-register', this.booking.value).subscribe((res: any) => {

        this.validationField = true;
        this.validationFieldType = "success";
        this.validationFieldMessage = res.message;
        localStorage.setItem("userData",JSON.stringify(res.data));
        
        this.apis.customer.next(res.data)
        localStorage.setItem("token", "Bearer " + res.data.token)
        this.removealert(3000);
        setTimeout(() => {
          this.router.navigate(['category']);
        }, 3000)
      }, (err) => {

        this.validationField = true;
        this.validationFieldType = "danger";
        this.validationFieldMessage = err.error.errors.phone[0];
        this.removealert(3000);
      })
    } else {
      if (this.GetErrorsFromFormGroup(this.booking, this.validationMapping)) {
        this.validationField = true;
        this.validationFieldType = "danger";
        this.validationFieldMessage = this.GetErrorsFromFormGroup(this.booking, this.validationMapping).phone;
        this.removealert(3000);
      }
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
}

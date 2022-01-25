import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './Components/category/category.component';
import { SubcategoryComponent } from './Components/subcategory/subcategory.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SecureapisInterceptor } from './Service/secureapis.interceptor';
import { CategoryIconComponent } from './Shared/category-icon/category-icon.component';
import { ServicesComponent } from './Components/services/services.component';
import { ServiceIconComponent } from './Shared/service-icon/service-icon.component';
import { BackbuttonComponent } from './Shared/backbutton/backbutton.component';
import { ServiceComponent } from './Components/service/service.component';
import { BookingComponent } from './Components/booking/booking.component';
import { OrderComponent } from './Components/order/order.component';
import { BottombarComponent } from './Shared/bottombar/bottombar.component';
import { HomeComponent } from './Components/home/home.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { OrdersComponent } from './Components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoryComponent,
    SubcategoryComponent,
    SplashScreenComponent,
    CategoryIconComponent,
    ServicesComponent,
    ServiceIconComponent,
    BackbuttonComponent,
    ServiceComponent,
    BookingComponent,
    OrderComponent,
    BottombarComponent,
    HomeComponent,
    TransactionComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecureapisInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CategoryComponent } from './Components/category/category.component';
import { SubcategoryComponent } from './Components/subcategory/subcategory.component';
import { ServicesComponent } from './Components/services/services.component';
import { ServiceComponent } from './Components/service/service.component';
import { BookingComponent } from './Components/booking/booking.component';
import { OrderComponent } from './Components/order/order.component';
import { HomeComponent } from './Components/home/home.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { OrdersComponent } from './Components/orders/orders.component';

const routes: Routes = [
  {
    path: '',redirectTo:'home',pathMatch: 'full'
  },
  {
    path: 'customer-login',component:HomePageComponent
  },
  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'category',component:CategoryComponent
  },
  {
    path: 'subcategory',component:SubcategoryComponent
  },
  {
    path: 'services',component:ServicesComponent
  },
  {
    path: 'service/:id',component:ServiceComponent
  },
  {
    path: 'booking',component: BookingComponent
  },
  {
    path: 'order',component: OrderComponent
  },
  {
    path: 'transaction',component: TransactionComponent
  },
  {
    path: 'orders',component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

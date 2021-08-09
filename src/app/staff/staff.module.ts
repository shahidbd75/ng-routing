import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SetupsComponent } from './components/setups/setups.component';
import { UserComponent } from './components/users/user/user.component';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffLayoutComponent } from './components/staff-layout/staff-layout.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    ReportsComponent,
    SetupsComponent,
    UserComponent,
    CustomerComponent,
    DashboardComponent,
    StaffLayoutComponent,
  ],
  imports: [CommonModule, StaffRoutingModule],
})
export class StaffModule {}

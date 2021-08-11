import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SetupsComponent } from './components/setups/setups.component';
import { ProductSearchComponent } from './components/shared/product-search/product-search.component';
import { StaffLayoutComponent } from './components/staff-layout/staff-layout.component';
import { UserComponent } from './components/users/user/user.component';
import { StaffRoutingModule } from './staff-routing.module';

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
    ProductSearchComponent,
  ],
  imports: [CommonModule, StaffRoutingModule, FormsModule, ReactiveFormsModule],
})
export class StaffModule {}

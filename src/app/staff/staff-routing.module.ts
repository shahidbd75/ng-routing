import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SetupsComponent } from './components/setups/setups.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customer/:id/:name', component: CustomerComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'setup', component: SetupsComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}

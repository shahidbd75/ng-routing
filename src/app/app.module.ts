import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { LayoutComponent } from './admin/components/layout/layout.component';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SetupsComponent } from './components/setups/setups.component';
import { UserComponent } from './components/users/user/user.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  // {
  //   path: 'home',
  //   component: DashboardComponent,
  // },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customer/:id/:name', component: CustomerComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'setup', component: SetupsComponent },
  {
    path: 'admin',
    component: LayoutComponent,
    loadChildren: './admin/admin.module#AdminModule',
  },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    ReportsComponent,
    SetupsComponent,
    UserComponent,
    CustomerComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

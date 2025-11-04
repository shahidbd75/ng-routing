import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { ProductsComponent } from './components/products/products.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SupplierComponent } from './components/supplier/supplier.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

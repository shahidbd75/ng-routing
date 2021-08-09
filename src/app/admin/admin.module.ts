import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SupplierComponent } from './components/supplier/supplier.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    SupplierComponent,
    DeliveryComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}

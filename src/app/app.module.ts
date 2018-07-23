import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditCustomerComponent
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

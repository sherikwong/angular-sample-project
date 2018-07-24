import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project Components
import { HomeComponent } from './home/home.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomersComponent } from './customers/customers.component';


const appRoutes: Routes = [
    // Getting Started
    { path: '', component: HomeComponent },

    // View customers
    { path: 'customers', component: CustomersComponent },

    // Edit customer
    { path: 'edit-customer/:id', component: EditCustomerComponent },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' },
   ];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);

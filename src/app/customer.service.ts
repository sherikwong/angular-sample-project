import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Acme Corp',
      city: 'Philadelphia',
      state: 'PA',
      zipCode: '11111',
      street: '123 Main St',
      createdDate: new Date()
    },
    {
      id: 2,
      name: 'US Steele',
      city: 'Bethlahem',
      state: 'PA',
      zipCode: '11112',
      street: '123 Mulberry St',
      createdDate: new Date()
    }
  ];

  constructor() { }

  get(id: number): Customer {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        return this.customers[i];
      }
    }

    return null;
  }

  getAll(): Customer[] {
    return this.customers;
  }

  save(customer: Customer) {
    // Pretend that the customer was saved
    console.log('Saved object: %s', JSON.stringify(customer));
  }
}

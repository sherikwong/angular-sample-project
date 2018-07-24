import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import {states} from '../../assets/common'

// Project imports
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  // Forms
  public form: FormGroup;

  states = states;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private fb: FormBuilder) {}


  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(((params) => {
      const id: number = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      const customer = this.customerService.get(id);
    // Build Form
    this.form = this.fb.group({
      id: new FormControl(customer.id, Validators.required),
      name: new FormControl(customer.name, Validators.required),
      city: new FormControl(customer.city, Validators.required),
      state: new FormControl(customer.state, Validators.compose([Validators.minLength(2), Validators.maxLength(2), Validators.required])),
      street: new FormControl(customer.street, Validators.required),
      zipCode: new FormControl(customer.zipCode, Validators.required),
    });

    }));
  }

  onSubmit(): void {
    console.log('Save button clicked!')
  }

}

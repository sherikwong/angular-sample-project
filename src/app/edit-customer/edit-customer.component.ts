import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { FormBuilder, FormGroup, FormControl } from '../../../node_modules/@angular/forms';

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

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private fb: FormBuilder) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(((params) => {
      const id: number = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      const customer = this.customerService.get(id);
    // Build Form
    this.form = this.fb.group({
      id: new FormControl(customer.id),
      name: new FormControl(customer.name),
      city: new FormControl(customer.city),
      state: new FormControl(customer.state),
      street: new FormControl(customer.street),
      zipCode: new FormControl(customer.zipCode),
    });

    }));
  }

  onSubmit(): void {
    // TODO: code
  }

}

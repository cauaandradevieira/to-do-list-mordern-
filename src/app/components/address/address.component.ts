import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddressService } from '../../services/address.service';
import { Address } from '../../interface/address';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  form!: FormGroup;
  addressService = inject(AddressService);
  address!: Address;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.maxLength(9)]]
    }
    );
  };

  clickTest() {
    if (this.form.invalid) {
      console.log("Form invalid" + this.form.errors);
      return;
    }

    this.addressService.get(this.form.value['cep']).subscribe(
      {
        next: (data) => { this.address = data }
      }
    );
  }
}

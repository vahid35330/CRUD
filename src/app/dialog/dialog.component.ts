import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  RequiredValidator,
} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm!: FormGroup;
  constructor(private FormBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.productForm = this.FormBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
  addProduct() {
    console.log(this.productForm.value);
  }
}

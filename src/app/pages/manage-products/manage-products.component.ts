import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  productForm: FormGroup;
  selectedProcess: string = 'Crear';

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      advantages: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.selectedProcess === 'Crear') {
      console.log('Producto creado:', this.productForm.value);
    }
  }

  editProduct() {
    console.log('Editar producto:', this.productForm.value);
  }

  deleteProduct() {
    console.log('Producto eliminado');
  }

  cancel() {
    this.productForm.reset();
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      console.log('Archivo seleccionado:', input.files[0]);
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  solicitudForm: FormGroup;

  constructor(private fb: FormBuilder,
    private snackbar: MatSnackBar
  )
   {
    this.solicitudForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      validacionCorreo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      fechaExpedicion: ['', Validators.required],
      telefono: ['', Validators.required],
      celular: ['', Validators.required],
      adjuntoId: [null, Validators.required],
      adjuntoEconomico: [null],
    });
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      this.snackbar.open('Formulario enviado con éxito, por favor revise su correo para validar el envio de este y este pendiente para la respuesta de su solicitud, siga las instrucciones que se le indican allí', 'Cerrar', {
        duration: 3000
      })
    }
  }

  onCancel() {
    this.solicitudForm.reset();
  }
}

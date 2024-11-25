import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent {
  constructor(private fb: FormBuilder, private router: Router) {}
  movimientos = [
    { transaccion: '---------------', fecha: 'xx/xx/xxxx', monto: '$ ---------', productos: 3 },
    { transaccion: '---------------', fecha: 'xx/xx/xxxx', monto: '$ ---------', productos: 3 },
    { transaccion: '---------------', fecha: 'xx/xx/xxxx', monto: '$ ---------', productos: 3 }
  ];
  
  goBack(): void {
    this.router.navigate(['loginUser']); 
  }
}

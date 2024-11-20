import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private snackbar: MatSnackBar,
    private router: Router,
    public globalService: GlobalService
  ){}

  onSubmit() {
    if (this.loginData.username.trim() == "" && this.loginData.password.trim() == ""){
      this.snackbar.open('Por favor introduzca un usuario y contraseña para continuar.', 'Cerrar', {
        duration: 3000
      })
    } else if (this.loginData.username.trim() == ""){
      this.snackbar.open('Por favor introduzca su usuario.', 'Cerrar', {
        duration: 3000
      })
    } else if (this.loginData.password.trim() == ""){
      this.snackbar.open('Por favor introduzca su contraseña.', 'Cerrar', {
        duration: 3000
      })
    } else {
      this.setRole();
      this.snackbar.open('Login exitoso.', 'Cerrar', {
        duration: 3000
      })
      this.goHome();
    }
  }

  setRole(){
    let role = this.globalService.getGlobalVariable();
    if(role == "admin"){
      this.globalService.setGlobalVariable("admin-loged");
    } else {
      this.globalService.setGlobalVariable("user-loged");
    }
  }

  goHome(){
    this.router.navigate(["home"]);
  }

  goLogin(){
    this.globalService.setGlobalVariable("");
    this.router.navigate(["login"]);
  }

  goRegister(){
    this.router.navigate(["register"])
  }

  onForgotPassword() {
    this.router.navigate(["forgotPassword"])
  }
}

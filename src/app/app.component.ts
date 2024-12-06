import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'centauro';

  constructor(public globalService: GlobalService,
    private router: Router
  ){}

  userLoged() : boolean {
    if(this.globalService.getGlobalVariable() == "user-loged") return true;
    return false;
  }

  adminLoged() : boolean {
    if(this.globalService.getGlobalVariable() == "admin-loged") return true;
    return false;
  }

  logOut(){
    this.router.navigate(["login"])
    this.globalService.setGlobalVariable("")
  }

  goHome(){
    this.router.navigate(["home"]);
  }

  goLogin(){
    this.router.navigate(["login"])
  }
  
  goManage(){
    this.router.navigate(["manageProduct"])
  }

  goRequest(){
    this.router.navigate(["requestProduct"])
  }

  goContact(){
    this.router.navigate(["contactUs"])
  }

  goRegister(){
    this.router.navigate(["register"])
  }

  goForgotPassword(){
    this.router.navigate(["forgotPassword"])
  }
  goUser(){
    this.router.navigate(["users"])
  }

  goMovements(){
    this.router.navigate(["movements"])
  }

  goManageUsers(){
    this.router.navigate(["manage-users"])
  }

  goRequests(){
    this.router.navigate(["requests"])
  }

  goProducts(){
    this.router.navigate(["products"])
  }
}

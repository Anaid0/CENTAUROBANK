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
}

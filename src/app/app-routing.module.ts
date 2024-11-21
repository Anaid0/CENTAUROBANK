import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "loginUser",
    component: LoginUserComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  
  {
    path: "manageProduct",
    component: ManageProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { RequestProductsComponent } from './pages/request-products/request-products.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

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
  },
  {
    path: "requestProduct",
    component: RequestProductsComponent
  },
  {
    path: "contactUs",
    component: ContactUsComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  { 
    path: "forgotPassword",
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

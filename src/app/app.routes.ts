import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';


export const routes: Routes = [
{
    path:'',component: HomeComponent
},
{
    path:'products/:id',component: ProductsComponent
},
{
    path:'login',component: LoginComponent
},
{
    path:'**',component: ErrorComponent
}

];

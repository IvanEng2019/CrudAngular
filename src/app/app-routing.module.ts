import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProducttDeleteComponent } from './components/product/productt-delete/productt-delete.component';

const routes: Routes = [
{
    path: "",
    component: HomeComponent
},
{
    path: "products",
    component: ProductCrudComponent
},
{
    path: "products/create",
    component: ProductCreateComponent
},
{
    path: "products/delete/:id",
    component: ProducttDeleteComponent
},
{
    path: "products/update/:id",
    component: ProductUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

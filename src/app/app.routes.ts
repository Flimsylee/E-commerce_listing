import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {component: ProductListComponent, path:"list" },
    {component: ProductEditComponent, path:"edit"},
    {component: ProductDetailsComponent, path:"details"},
];

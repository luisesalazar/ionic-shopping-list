import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'add-shopping-item', loadChildren: './pages/add-shopping-item/add-shopping-item.module#AddShoppingItemPageModule' },
  { path: 'edit-shopping-item', loadChildren: './pages/edit-shopping-item/edit-shopping-item.module#EditShoppingItemPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

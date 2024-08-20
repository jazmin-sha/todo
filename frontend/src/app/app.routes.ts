import { Routes } from '@angular/router';
import { ItemAddFormComponent } from './components/item-add-form/item-add-form.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'add-item', component: ItemAddFormComponent },
  { path: 'list-item', component: ListItemComponent },
  { path: 'edit/:id', component: ItemAddFormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/list-item', pathMatch: 'full' }
];
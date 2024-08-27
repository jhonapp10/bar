import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ListMenuComponent } from './list-menu/list-menu.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: UserComponent },
  //{ path: '', component: ListMenuComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

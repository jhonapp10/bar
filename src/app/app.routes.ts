import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { ListcookingComponent } from './listcooking/listcooking.component';
import { FormmenusComponent } from './formmenus/formmenus.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MenuReviewComponent } from './menu-review/menu-review.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [

    //{path: 'app-user', loadComponent:()=>import('./user/user.component').then(c=>c.UserComponent)},
    /*{ path: '', redirectTo: 'app-user', pathMatch: 'full' }, // Redirigir la ruta raíz a /login
    { path: 'app-root' , loadComponent:()=>import('./app.component').then(c=>c.AppComponent)},    
    { path: 'app-search' , component: SearchComponent},
    { path: 'app-listcooking' ,loadComponent:()=>import('./listcooking/listcooking.component').then(c=>c.ListcookingComponent)},
    { path: 'app-formmenus',loadComponent:()=>import('./formmenus/formmenus.component').then(c=>c.FormmenusComponent)},
    { path: 'app-listcooking/:category' , loadComponent:()=>import('./listcooking/listcooking.component').then(c=>c.ListcookingComponent)},
    { path: 'app-card/:id' , loadComponent:()=>import('./menu-card/menu-card.component').then(c=>c.MenuCardComponent)},
    { path: 'app-review' , loadComponent:()=>import('./menu-review/menu-review.component').then(c=>c.MenuReviewComponent)}*/



    //{path: 'app-user', component: UserComponent},
    { path: '', redirectTo: '/app-listcooking', pathMatch: 'full' }, 
    { path: 'app-root' , component: AppComponent},    
    { path: 'app-search' , component: SearchComponent},
    { path: 'app-listcooking' , component: ListcookingComponent},
    { path: 'app-formmenus',component: FormmenusComponent},
    { path: 'app-cart' , component: CartComponent},
    { path: 'app-listcooking/:category' , component: ListcookingComponent},
    { path: 'app-card/:id' , component: MenuCardComponent},
    { path: 'app-review' , component: MenuReviewComponent}
];

export const appRoutingProviders: any[] =[];
export const routing : ModuleWithProviders<Route> = RouterModule.forRoot(routes);
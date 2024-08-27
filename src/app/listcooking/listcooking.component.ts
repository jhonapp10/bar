//import { Component } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {Router, ActivatedRoute,Params} from '@angular/router';
import { AppModule } from '../app/app.module';
import { CartaService } from '../carta.service';
import { MenuServiceService } from '../MenuService.service';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { CookingComponent } from '../cooking/cooking.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Menu } from '../app/Menu';
import { empty, Observable } from 'rxjs';
import { response } from 'express';
import { CartServiceService } from '../cart-service.service';
import { Cart } from '../app/Cart';
@Component({
  selector: 'app-listcooking',
  standalone: true,
  imports: [CommonModule,MatIconModule, SearchComponent,  RouterModule, CookingComponent, MatListModule, MatCardModule,MatDividerModule,MatSlideToggleModule],
  templateUrl: './listcooking.component.html',
  styleUrl: './listcooking.component.css',
  providers: [ MenuServiceService ]
})
export class ListcookingComponent implements OnInit {
  menus : any[] =[]; 
  selected: boolean = false;

  @Output () menusChange: any[]= [];

  @Output () menuEvent= new EventEmitter<any[]>();


  category : string = '';

  @Input () listmenus: boolean= true;

  menu_service: MenuServiceService;

  menu_cart: any[]=[];

  menu_cart_v2 : Cart;
  count_menu =0;

  constructor(private menuService: MenuServiceService,private cartService: CartServiceService, private routeractive: ActivatedRoute, private router: Router) { 
    this.menu_service= menuService;
    this.menu_cart_v2 = new Cart([],0);
  }

  canlistmenus(): boolean{
    return this.listmenus;
  }

  ngOnInit(): void{
    
    this.canlistmenus();
    this.routeractive.params.subscribe((params:Params)=>{

      this.category =  params['category'];
      console.log(this.category);
     
      this.getMenusCategory(this.category);
    })
  }

  getMenus(): void {
    this.menuService.getMenus().subscribe(
      (data) => {
        console.log(data);
        this.menus = data; // Asignar los menús obtenidos al array de menús
        
      },
      (error) => {
        console.error('Error al obtener los menús:', error);
      }
    );
  }

  getMenusCategory(category: string): void {
    this.menuService.getEntrantes(category).subscribe(
      (data) => {
        this.menus = data; // Asignar los menús obtenidos al array de menús
      },
      (error) => {
        console.error('Error al obtener los menús:', error);
      }
    );
  }

  onClickMenu(menu: any){
    console.log(menu);
    this.router.navigate(['/app-card', menu._id]);
  }

  
  onclickMenuSelection(menu: any){
    /*this.menu_cart_v2.menu.forEach(mc => {

      if (mc._id == menu._id){
        this.count_menu++;
        this.menu_cart_v2.count = this.count_menu;
        this.menu_cart_v2.menu = menu;
        this.menu_cart.push(this.count_menu);
         
      }
      else{
        this.count_menu = 1;
        this.menu_cart.push(menu,this.count_menu);
        this.menu_cart_v2.menu = menu;
        this.menu_cart_v2.count = this.count_menu;
      }
      
    });*/
    if (this.menu_cart.find(mc=> mc._id==menu._id)){
      this.count_menu++;
      this.menu_cart.push(this.count_menu);
        
    }
    else{
      this.count_menu = 1;
      this.menu_cart.push(menu,this.count_menu);
      
    }
    
    
    this.cartService.addMenu(menu);
    console.log(this.menu_cart);
    
  }

  
  isSelected(menu: any): boolean {
    return this.menusChange.includes(menu);
  }

  deleteitem(id:string){

    console.log(id);

    this.menuService.deleteMenu(id).subscribe(

      response=>{
        if (response){
          this.router.navigate(['/app-listcooking'])
        }

      }, 
      error=>{
        console.log(error);
      }
      
    );   

  }
  review(){

    console.log(this.menu_cart);
    this.router.navigate(['/app-cart']);    
  }

  
}

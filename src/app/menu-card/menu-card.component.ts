import { Component,Input, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { AppModule } from '../app/app.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartaService } from '../carta.service';
import { MenuServiceService } from '../MenuService.service';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AppModule, RouterModule,CommonModule,MatDivider],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css',
  providers: [ MenuServiceService ]
})
export class MenuCardComponent implements OnInit {

  public id: string ='';
  @Input() menus: any; // Definir un objeto para contener los datos del menú

  public menu_Service: MenuServiceService;
  menu_cart: any[]=[];
  count_menu =0;

  public menuDetail : any | undefined;
  constructor(private _route: ActivatedRoute, private _router: Router, menuService : MenuServiceService, private cartService: CartServiceService){    
    this.menu_Service = menuService;
  }
  ngOnInit(){
    this._route.params.subscribe((params:Params)=>{
      //console.log(params);
      this.id = params['id'];
      console.log(this.id);

      this.menu_Service.getMenuById(this.id).subscribe(
        (data) => {
          this.menuDetail = data; // Asignar los menús obtenidos al array de menús
          console.log(this.menuDetail);
        },
        (error) => {
          console.error('Error al obtener los menús:', error);
        }
      );

      





      //this.menuDetail = this.cartaService.getMenuId(this.id);

      //console.log(this.menuDetail);

    })
  }

  onclickAddCart(menu:any){

    if (this.menu_cart.find(mc=> mc._id==menu._id)){
      this.count_menu++;
      this.menu_cart.push(this.count_menu);
        
    }
    else{
      this.count_menu = 1;
      this.menu_cart.push(menu,this.count_menu);      
    }   
    
    this.cartService.addMenu(menu);
    this._router.navigate(['/app-listcooking']);
    console.log(this.menu_cart);

  }
}

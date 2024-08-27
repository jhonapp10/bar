import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MenuServiceService } from '../MenuService.service';
import { OrderService } from '../order.service';
import { Menu } from '../app/Menu';
import { Order } from '../models/order.model';
import { FormControl, NgModel } from '@angular/forms';
import { CartServiceService } from '../cart-service.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule,MatListModule,MatSelect,MatOption,MatFormFieldModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  selectedMenus: any[] = [];
  totalPrice: number = 0;
  mesaSeleccionada=new FormControl('');
  mesaItem: string ='';
  mesasList:string[]=['Mesa 1','Mesa 2','Mesa 3','Mesa 4','Mesa 5']
  constructor(private menuService: MenuServiceService, private cartService: CartServiceService, private router: Router, private orderService: OrderService) {
    //this.getselectedMenus();
  }
  ngOnInit(): void {

    this.getselectedMenus();
    
    //throw new Error('Method not implemented.');
  }

  getselectedMenus(){
    this.selectedMenus = this.cartService.getMenu();
    console.log(this.selectedMenus);
    
  }

  getTotalPrice(): number {
    return this.totalPrice = this.selectedMenus.reduce((total, menu) => total + menu.price, 0);
  }


  onClickReturnMenu(){
    console.log("pulsando volver");
    this.router.navigate(['/app-listcooking']);
  }

  

  // Método para confirmar el pedido
  confirmOrder(): void {
    const newOrder: Order = {
      orderNumber: this.generateOrderNumber(),
      menus: this.selectedMenus,
      totalPrice: this.totalPrice,
      mesa:this.mesaItem,      
      status: 'pending'
    };

    console.log(newOrder);

    this.orderService.createOrder(newOrder).subscribe(
      order => {
        console.log('Pedido realizado con éxito:', order);
        this.clearCart(); // Limpia el carrito después de hacer el pedido
      },
      error => console.error('Error al realizar el pedido', error)
    );
  }

  // Generar un número de pedido único
  private generateOrderNumber(): string {
    return `ORD-${Date.now()}`;
  }
  deleteItemMenu(index: number){
    this.cartService.removeMenu(index);
    this.selectedMenus = this.cartService.getMenu();
  }

   // Limpiar el carrito
   private clearCart(): void {
    this.selectedMenus = [];
    this.totalPrice = 0;
  }


}

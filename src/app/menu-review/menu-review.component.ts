import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaService } from '../carta.service';
import { MenuServiceService } from '../MenuService.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-review.component.html',
  providers:[MenuServiceService],
  styleUrl: './menu-review.component.css'
})
export class MenuReviewComponent {
  @Input() menusSelected: any[] = [];

  

  constructor(private menuService: MenuServiceService) { 
    //this.menusSelected = this.menuService.menusSelected;
    console.log(this.menusSelected);
  }

  receiveMenu($event: any[]){
    console.log($event);
    this.menusSelected = $event;
  }

  
  /*ngOnInit(): void {
    // Obtener los menús seleccionados del servicio
    
  
    
  }*/

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const selectedMenu of this.menusSelected) {
      totalPrice += selectedMenu.price;
    }
    return totalPrice;
  }
  getTotalPrice2(): number {
    return this.menusSelected.reduce((total, menu) => total + menu.price, 0);
  }

}

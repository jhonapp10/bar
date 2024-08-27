import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cooking',
  standalone: true,
  imports: [],
  templateUrl: './cooking.component.html',
  styleUrl: './cooking.component.css'
})
export class CookingComponent {
  public id: string | undefined;
  public id_menu: number | undefined;
  public name: string | undefined;
  public price!: number;
  public details: string | undefined;
  public category : string | undefined;
  public ingredients : string [] | undefined;

  /*constructor(name: string, price: number,details: string, category: string,ingredients: string[]){
  
  }*/

  
}

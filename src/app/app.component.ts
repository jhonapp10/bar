import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



import { Router, RouterModule } from '@angular/router';
//import { routing } from './app.routes'
import { AppModule } from './app/app.module';
import { ListcookingComponent } from './listcooking/listcooking.component';
//import { FormmenuComponent } from './formMenu/formMenu.component';
import { FormmenusComponent } from './formmenus/formmenus.component';
import { SearchComponent } from './search/search.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MenuReviewComponent } from './menu-review/menu-review.component';

import { CartaService } from './carta.service';
import { MenuServiceService } from './MenuService.service';
import { ControlContainer, FormBuilder, FormControl, NgForm, FormGroup, Validators } from '@angular/forms';
import { MenusComponent } from './menus/menus.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  AppModule, RouterModule,ListcookingComponent,FormmenusComponent,SearchComponent, MenuCardComponent,MatTabsModule,MenuReviewComponent,MatFormFieldModule, MatInputModule, MatSelectModule, MenusComponent,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'RESTAURACIÓN';
  public typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  public formInputMenu= false;
  public menus: any[] =[];
  public category: string= '';
  public menu_Service: MenuServiceService;
  menuForm: FormGroup;

  @Output() listmenus: boolean = true;
  

  private router!: Router;

  constructor(private route: Router, private menuService: MenuServiceService, private formBuilder: FormBuilder){
    this.router = route;
    this.menu_Service = menuService;
    menuService.isAll = false;
    //this.menus = cartaService.menuDb;
    this.getMenus();
    this.menuForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: [''],
      imageUrl: ['']
  });
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

  goMenus(){
    console.log("pulsar el boton");
    this.router.navigate(['./app-listcooking'])
  }  


}

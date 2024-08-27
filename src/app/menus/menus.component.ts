import { Component, Output } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MenuServiceService } from '../MenuService.service';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [CommonModule,  RouterModule,MatTabsModule,MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule, ReactiveFormsModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent {
  [x: string]: any;

  public title: string = 'RESTAURACIÓN';
  public typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  public formInputMenu= false;
  public menus: any[] =[];
  public category: string= '';
  
  @Output() listmenus: boolean = true;
  /*menuForm = this['formBuilder'].group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: [''],
    imageUrl: ['']
});*/

  //private router!: Router;

  constructor(private route: Router, private menuService: MenuServiceService){
    
    

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
    this.route.navigate(['/app-listcooking'])
  }

  onTabChanged(event: MatTabChangeEvent): void {
    console.log(event);
    switch (event.index) {
      case 0: // index of the tab
        // this is our stub tab for link
        console.log("0");
        this.route.navigate(['/app-listcooking']);
        break;
      case 1:
        this.menuService.isAll = true;
        this.listmenus = true;
        this.route.navigate(['/app-listcooking']);

        console.log(this.listmenus);
        // do stuff with content or do nothing :)
        break;
      case 2:
        this.menuService.isAll = false;
        this.listmenus = true;
        this.onClickEntrantes('Entrada');
        this.route.navigate(['/app-listcooking/Entrada']);
        console.log(this.listmenus);
        // do stuff with content or do nothing :)
        break;

      case 3:
          this.menuService.isAll = false;
          this.listmenus = true;
          this.onClickEntrantes('Bebida');
          this.route.navigate(['/app-listcooking/Bebida']);
          console.log(this.listmenus);
          // do stuff with content or do nothing :)
          break;
      case 4:
          this.menuService.isAll = false;          
          this.listmenus= false;
          console.log(this.listmenus);
          this.route.navigate(['/app-formmenus']);
            // do stuff with content or do nothing :)
          break;
    }
  }

  onClickEntrantes(category: string){
    console.log("click entrantes");
    this.menuService.getEntrantes(category).subscribe(
      (data) => {
        this.menus = data; // Asignar los menús obtenidos al array de menús
      },
      (error) => {
        console.error('Error al obtener los menús:', error);
      }
    );
        
        //this.router.navigate(['/listcooking/Entrada']);    

  }

  onSubmit(): void {
    /*if (this.menuForm.valid) {
      /*this.menu_Service.addMenu(this.menuForm.value).subscribe(
        (data) => {
          console.log('Menú agregado correctamente:', data);
          // Realizar acciones adicionales si es necesario, como redireccionar a otra página
          this.menuForm.reset();
        },
        (error) => {
          console.error('Error al agregar el menú:', error);
        }
      );* /
    }*/
  }
}

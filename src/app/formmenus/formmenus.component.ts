import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChangeDetectionStrategy } from '@angular/core';
import { MenuServiceService } from '../MenuService.service';
import { AppComponent } from '../app.component';
import { AppModule } from '../app/app.module';
import { RouterModule } from '@angular/router';
import {Router, ActivatedRoute,Params} from '@angular/router';
import { ControlContainer, FormBuilder, FormControl, NgForm, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const ctrl = new FormControl("some value");
console.log(ctrl.value); // 'some value'

@Component({
    selector: 'app-formmenus',
    standalone: true,
    imports: [
        CommonModule,
        AppModule,
        AppComponent,
        RouterModule,
        MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule
    ],
    templateUrl: './formmenus.component.html',
    styleUrl: './formmenus.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    //providers:[MenuServiceService]
})
export class FormmenusComponent implements OnInit { 


  Form = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: [''],
    imageUrl: ['']
});
    menu ={
        name:'',
        price: 0,
        details:'',
        category:'',
        ingredients:''
    };
    categories: string[] = ['Plato principal', 'Entrada', 'Bebida', 'Postre']; // Opciones para el select
    menu_services: MenuServiceService;
        

    constructor(private menuServices: MenuServiceService, private formBuilder: FormBuilder,private routeractive: ActivatedRoute, private router: Router){
        this.menu_services= menuServices;
       
    }
    ngOnInit(): void {
       
    }
    onSubmit(): void {
        if (this.Form.valid) {
          this.menu_services.addMenu(this.Form.value).subscribe(
            (data) => {
              console.log('Menú agregado correctamente:', data);
              // Realizar acciones adicionales si es necesario, como redireccionar a otra página
              this.Form.reset();
            },
            (error) => {
              console.error('Error al agregar el menú:', error);
            }
          );
        }
      }


}

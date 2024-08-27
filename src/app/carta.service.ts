import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CookingComponent } from './cooking/cooking.component';
import { MenuServiceService } from './MenuService.service';

@Injectable({
  providedIn: 'root'
})
export class CartaService implements OnInit {
  menus = [
    {
      "id": 1,
      "name": "Paella de mariscos",
      "details": "Un clásico español que combina arroz con una variedad de mariscos como camarones, mejillones y calamares.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Arroz", "Camarones", "Mejillones", "Calamares", "Especias"],
      "imageUrl": "bar_app\bar\src\favicon.ico",
      "selected": false
    },
    {
      "id": 2,
      "name": "Filete de salmón a la parrilla",
      "details": "Salmón fresco cocinado a la parrilla y acompañado de una salsa de limón y hierbas.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Salmón", "Limón", "Hierbas", "Sal", "Pimienta"],
      "imageUrl": "\Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 3,
      "name": "Pasta Alfredo con pollo",
      "details": "Pasta fetuccini servida con una cremosa salsa Alfredo y trozos de pollo tierno.",
      "category": "Plato principal",      
      "price":10,
      "ingredients": ["Pasta fetuccini", "Salsa Alfredo", "Pollo", "Queso Parmesano", "Mantequilla"],
      "imageUrl": "\Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 4,
      "name": "Hamburguesa gourmet",
      "details": "Una jugosa hamburguesa de carne de res o pollo con ingredientes gourmet como queso cheddar, tocino crujiente y aguacate.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Carne de res o pollo", "Queso cheddar", "Tocino", "Aguacate", "Lechuga", "Tomate", "Pan de hamburguesa"],
      "imageUrl": "\Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 5,
      "name": "Tacos de carnitas",
      "details": "Tacos mexicanos rellenos de cerdo desmenuzado cocido lentamente y acompañados de cebolla, cilantro y salsa.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Cerdo", "Tortillas de maíz", "Cebolla", "Cilantro", "Salsa"],
      "imageUrl": "\Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 6,
      "name": "Ensalada César con pollo a la parrilla",
      "details": "Una fresca ensalada César con crujientes trozos de pollo a la parrilla, aderezada con una deliciosa salsa César.",
      "category": "Entrada",
      "price":10,
      "ingredients": ["Lechuga romana", "Pollo", "Pan tostado", "Queso Parmesano", "Salsa César"],
      "imageUrl": "\Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 7,
      "name": "Curry de pollo",
      "details": "Pollo tierno cocinado en una sabrosa salsa de curry con una mezcla de especias aromáticas, servido con arroz basmati.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Pollo", "Leche de coco", "Curry en polvo", "Cúrcuma", "Comino", "Arroz basmati"],
      "imageUrl": "\Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 8,
      "name": "Sushi variado",
      "details": "Una selección de sushi fresco que incluye rollos de salmón, atún, aguacate y pepino, acompañados de salsa de soja y wasabi.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Salmón", "Atún", "Aguacate", "Pepino", "Arroz de sushi", "Algas nori"],
      "imageUrl": "\Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 9,
      "name": "Lasaña de carne",
      "details": "Capas de pasta intercaladas con carne molida sazonada, salsa de tomate y queso mozzarella gratinado.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Carne molida", "Pasta para lasaña", "Salsa de tomate", "Queso mozzarella", "Especias"],
      "imageUrl": "/Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 10,
      "name": "Pad Thai",
      "details": "Fideos de arroz salteados con camarones, tofu, brotes de soja, cacahuetes y salsa de tamarindo, una especialidad tailandesa.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Fideos de arroz", "Camarones", "Tofu", "Brotes de soja", "Cacahuetes", "Salsa de tamarindo"],
      "imageUrl": "\Untitled Project.jpg",
      "selected": false
    },
    {
      "id": 11,
      "name": "Costillas a la barbacoa",
      "details": "Costillas de cerdo cocidas lentamente y cubiertas con una salsa barbacoa casera, tiernas y llenas de sabor.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Costillas de cerdo", "Salsa barbacoa", "Especias", "Azúcar", "Vinagre"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 12,
      "name": "Risotto de champiñones",
      "details": "Arroz cremoso cocido con champiñones frescos, caldo de verduras y queso parmesano rallado.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Arroz arborio", "Champiñones", "Caldo de verduras", "Queso Parmesano", "Vino blanco"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 13,
      "name": "Fajitas mixtas",
      "details": "Tiras de carne de res y pollo marinadas y salteadas con pimientos y cebollas, servidas con tortillas calientes, guacamole y salsa.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Carne de res", "Pollo", "Pimientos", "Cebolla", "Tortillas de harina", "Guacamole", "Salsa"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 14,
      "name": "Sopa de miso",
      "details": "Una sopa japonesa reconfortante a base de caldo dashi con tofu, algas y pasta de miso.",
      "category": "Entrada",
      "price":10,
      "ingredients": ["Caldo dashi", "Tofu", "Algas", "Pasta de miso", "Cebolla verde"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 15,
      "name": "Fish and chips",
      "details": "Filetes de pescado rebozados y fritos acompañados de papas fritas crujientes y salsa tártara.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Pescado blanco", "Harina", "Cerveza", "Papas", "Vinagre de malta", "Salsa tártara"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 16,
      "name": "Pollo a la parrilla con vegetales asados",
      "details": "Pechuga de pollo jugosa a la parrilla servida con una variedad de vegetales asados, como zanahorias, pimientos y calabacines.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Pechuga de pollo", "Zanahorias", "Pimientos", "Calabacines", "Aceite de oliva", "Especias"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 17,
      "name": "Ceviche peruano",
      "details": "Pescado blanco fresco marinado en limón con cebolla roja, cilantro y ají, una explosión de sabores peruanos.",
      "category": "Entrada",
      "price":10,
      "ingredients": ["Pescado blanco", "Limón", "Cebolla roja", "Cilantro", "Ají amarillo"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 18,
      "name": "Pizza margarita",
      "details": "Pizza clásica con una base de salsa de tomate, mozzarella fresca y hojas de albahaca.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Masa de pizza", "Salsa de tomate", "Mozzarella", "Albahaca fresca"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 19,
      "name": "Sushi burrito",
      "details": "Una fusión entre sushi y burrito, relleno de pescado crudo, arroz, aguacate, pepino y otros ingredientes frescos.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Pescado crudo", "Arroz", "Aguacate", "Pepino", "Algas nori", "Salsa de soja"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 20,
      "name": "Churrasco con chimichurri",
      "details": "Jugoso churrasco de carne de res a la parrilla servido con chimichurri, una salsa de hierbas frescas, ajo y vinagre.",
      "category": "Plato principal",
      "price":10,
      "ingredients": ["Carne de res", "Ajo", "Perejil", "Orégano", "Vinagre", "Aceite de oliva"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },

    {
      "id": 21,
      "name": "Coca-Cola",
      "details": "Refresco carbonatado de cola",
      "category": "Bebida",
      "price":10,
      "ingredients": ["Agua carbonatada", "Azúcar", "Ácido fosfórico", "Cafeína", "Colorante caramelo"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 22,
      "name": "Sprite",
      "details": "Refresco carbonatado de lima-limón",
      "category": "Bebida",
      "price":10,
      "ingredients": ["Agua carbonatada", "Azúcar", "Ácido cítrico", "Saborizantes naturales", "Colorante"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 23,
      "name": "Fanta",
      "details": "Refresco carbonatado de naranja",
      "category": "Bebida",
      "price":10,
      "ingredients": ["Agua carbonatada", "Azúcar", "Concentrado de jugo de naranja", "Ácido cítrico", "Colorante"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 24,
      "name": "Agua mineral",
      "details": "Agua mineral natural sin gas",
      "category": "Bebida",
      "price":10,
      "ingredients": ["Agua"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    },
    {
      "id": 25,
      "name": "Limonada",
      "details": "Refresco no carbonatado de limón",
      "category": "Bebida",
      "price":10,
      "ingredients": ["Agua", "Limón", "Azúcar", "Hielo"],
      "imageUrl": "URL_IMAGEN",
      "selected": false
    }
  ];

  menuDb: any[] =[];

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(
      (data) => {
        this.menuDb = data;
        console.log(this.menuDb);
      },
      (error) => {
        console.error('Error al obtener los menús:', error);
      }
    );
  }


  constructor( private menuService: MenuServiceService) { 
  }

  getMenuItems(): any {
    return this.menuDb;
  }
  getMenuNames(){
    return this.menus.filter(menu=> menu.name);
  }
  public getMenuId(id: string) {

    return this.menuDb.filter(menu=> menu.id === id);
  }

  public getEntrantes(category : string){
    return this.menuDb.filter(menu=> menu.category == category);
  }

  setMenus(menu : any){
    this.menuDb = menu;
  }

  setMenuItems(menu: any){

    this.menus.push(menu);

  }

  getSelectedMenus() : any {

    console.log(this.menuDb);
    return this.menuDb.filter(menu => menu.selected);
    


  }
  updateMenuSelection(id:string, selected: boolean){
    let menuToUpdate = this.menuDb.find(menu => menu.id===id) ;

    if (menuToUpdate){
      menuToUpdate.selected = selected;
    }
    

    this.menuDb.map(menu => {

      if (menu.id == id){
        menu.selected = selected;
      }
      
    });

    

    this.setMenus(this.menus);

    console.log(this.menus);

  }

  

  /*getSuggestions( query: string): Observable<CartaService>{

    
  }*/
}

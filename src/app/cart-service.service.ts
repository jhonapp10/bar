import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private apiUrl = 'http://localhost:1337/menus'; // URL base de la API de menús en Strapi

  private menu: any[]=[];

  constructor(private http: HttpClient){


  }


  // Obtener todos los menús
  getMenus(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un menú por ID
  getMenuById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo menú
  createMenu(menu: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, menu);
  }

  // Actualizar un menú existente
  updateMenu(id: number, menu: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, menu);
  }

  // Eliminar un menú
  deleteMenu(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }




  //transferencias carrito
  addMenu(menu:any):void{

    this.menu.push(menu);
  }
  removeMenu(index: number):void{

    if (index >-1 && index < this.menu.length){
      this.menu.splice(index,1);
    }
    

  }

  getMenu():any[]{
    return this.menu;
  }

  clearCart(): void{

    this.menu = [];

  }


}

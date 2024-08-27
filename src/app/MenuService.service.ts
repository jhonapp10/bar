import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject, EMPTY, Observable, map } from 'rxjs';
import { Menu } from './app/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private menusSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public menus : Observable<any[]> = this.menusSubject.asObservable();
  private apiUrl = environment.apiUrl; // Obtiene la URL del backend desde el archivo de configuración

  public isAll: boolean= false;

  constructor(private http: HttpClient) { 
    this.loadMenus();
  }

  private loadMenus(): void{
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.menusSubject.next(data);
      },
      (error) => {
        console.error('Error al obtener los menús:', error);
      }
    );
  }

   

  
  
  
  
  getEntrantes(category: string): Observable<any[]>{
    if (category == undefined){
      return this.menus      
    }
    else{
      return this.menus.pipe(
        map(menus => menus.filter(menu => menu.category === category))
      );
    }
    
  }

  getMenus(): Observable<any[]> {
    console.log('obtener menus services');
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un menú por su ID
  getMenuById(_id: string): Observable<any> {
    console.log('obtener menus por ID services');
    return this.http.get<any>(`${this.apiUrl}/${_id}`);
  }

  // Agregar un nuevo menú
  addMenu(menu: any): Observable<any> {
    console.log('add menus services');
    return this.http.post<any>(this.apiUrl, menu);
  }

  // Actualizar un menú por su ID
  updateMenu(id: string, menu: any): Observable<any> {
    console.log('actualizar menus por ID services');
    return this.http.put<any>(`${this.apiUrl}/${id}`, menu);
  }

  // Eliminar un menú por su ID
  deleteMenu(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'aplication/json');
    return this.http.delete<any>(`${this.apiUrl}/${id}`,{headers: headers});
  }

  /*addMenu(menu: any) {
    return this.http.post<any>(`${this.apiUrl}/menus`, menu);
  }*/

  // Define otros métodos para manejar las operaciones CRUD en los menús  
}

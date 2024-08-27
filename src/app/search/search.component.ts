import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartaService } from '../carta.service';
import { AppModule } from '../app/app.module';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatOption } from '@angular/material/core';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatOption, RouterModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  public searchInput = new FormControl();
  filteredMenus: Observable<string[]> | undefined;
  menus_name: string[] = []; 

  constructor(private cardService: CartaService){}
  ngOnInit() {
    //this.menus_name.push(this.cardService.getMenuNames()) ;
    /*this.filteredMenus = this.searchInput.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );*/
  }

  /*private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.menus_name.filter(menu => menu.toLowerCase().includes(filterValue));
  }*/

  /*searchMenu(){
    const value: string = this.searchInput.value || '';

    this.cardService.getSuggestions(value).subscribe(menus => this.);
  }*/

  /*onSelectedOption( event: MatAutocompleteSelectedEvent): void{
    if (!event.option.value){
      this.selectedMenu = undefined;
      return;
    }

    const menu: Menu = event.option.value;
    this.searchInput.setValue();
    this.selectedMenu = menu;
  }*/

}

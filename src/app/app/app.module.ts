//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { routing, appRoutingProviders } from '../app.routes';
import {MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete'; // Importa MatAutocompleteModule
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectionList, MatListOption } from '@angular/material/list';
import { Form } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ListcookingComponent } from '../listcooking/listcooking.component';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { SearchComponent } from '../search/search.component';

import { AuthService } from '../auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { UserComponent } from '../user/user.component';

//import { FormmenuComponent } from '../formMenu/formmenu.component';
//import { AppComponent } from '../app.component';
//import { SearchComponent } from '../search/search.component';
//import { MatSelectModule } from '@angular/material';

@NgModule({

  declarations: [
    
    
    ],
  imports: [
    //BrowserModule,
    CommonModule,
    MatSliderModule,    
    MatListModule,
    MatSelectionList,
    MatListOption,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    HttpClientModule,
    UserComponent,
    
    
    
    
  ],
  providers:[
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

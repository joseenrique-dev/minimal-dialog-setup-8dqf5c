import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnyAngularComponent } from './any-angular/any-angular.component';

// Import from library
import { 
    NgxAwesomePopupModule, 
    DialogConfigModule 
 } from '@costlydeveloper/ngx-awesome-popup';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
       
        NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
        DialogConfigModule.forRoot() // Essential, mandatory dialog module. 
       
        ],
  declarations: [ AppComponent, HelloComponent, AnyAngularComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents:    [ AnyAngularComponent ]

})
export class AppModule { }

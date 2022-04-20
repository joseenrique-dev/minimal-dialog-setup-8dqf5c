import { Component, OnInit } from '@angular/core';
// import dynamic component, any angular component  
import { AnyAngularComponent } from './any-angular/any-angular.component';
// Import from library
import {
    DialogLayoutDisplay,
    DialogInitializer,
    ButtonLayoutDisplay,
    ButtonMaker
  } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Open source: ngx awesome popup';
  
  ngOnInit() {
    // this.dialog(); // open confirm box
  }

dialog() {
        
        // Instance of DialogInitializer includes any valid angular component as argument.
        const dialogPopup = new DialogInitializer(AnyAngularComponent);
        
        // Any data can be sent to AnyAngularComponent.
        dialogPopup.setCustomData({name: 'Jean-Luc', surname: 'Picard', id: 1}); // optional
        
        // Set some configuration.
        dialogPopup.setConfig({
            width     : '500px',
            layoutType: DialogLayoutDisplay.NONE // SUCCESS | INFO | NONE | DANGER | WARNING
        });
        
        // Set some custom buttons as list.
        // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
        dialogPopup.setButtons([
            new ButtonMaker('Edit', 'edit', ButtonLayoutDisplay.WARNING), 
            new ButtonMaker('Submit', 'submit', ButtonLayoutDisplay.SUCCESS),
            new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
        ]);
    
        // Simply open the popup and observe which button is clicked and, 
        // receive optional payload from AnyAngularComponent.
        dialogPopup.openDialog$().subscribe(resp => {
            console.log('dialog response: ', resp);
        });
    }
}

import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import {Subscription} from 'rxjs';
import {DialogBelonging} from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-any-angular',
  templateUrl: './any-angular.component.html',
  styleUrls: ['./any-angular.component.css']
})
export class AnyAngularComponent implements OnInit, OnDestroy {
    
    private subscriptions: Subscription = new Subscription();
    
    // Dependency Injection of the dialogBelonging in constructor is crucial.
    constructor(@Inject('dialogBelonging') public dialogBelonging: DialogBelonging) {}
    
    ngOnInit(): void {
        // Check received data and other available features.
        console.log(this.dialogBelonging);
        
        // Subscribe to button listeners.
        this.subscriptions.add(
            // IDialogEventsController
            this.dialogBelonging.eventsController.onButtonClick$.subscribe((_Button) => {
                if (_Button.ID === 'edit') {
                    
                    // Do some logic for example edit user.
                } else if (_Button.ID === 'submit') {
                    
                    // Do some logic and close popup.
                    this.dialogBelonging.eventsController.close();
                }
                else if (_Button.ID === 'cancel') {
                    
                    // Do some logic and close popup.
                    this.dialogBelonging.eventsController.close();
                }
            })
        );
        
        // Timeout emulates async data.
        setTimeout(() => {
            // Close the loader after some data is ready.
            // IDialogEventsController
            this.dialogBelonging.eventsController.closeLoader();
        }, 1000);
    }
    
    ngOnDestroy(): void {
        // Care about memory and close all subscriptions.
        this.subscriptions.unsubscribe();
    }
}
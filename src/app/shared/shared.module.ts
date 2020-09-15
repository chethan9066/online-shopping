import { NgModule } from '@angular/core';

import { LoadingSpinner } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { DropDownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        LoadingSpinner,
        AlertComponent,
        DropDownDirective,

    ],
    imports:[
        CommonModule
    ],
    exports:[
        LoadingSpinner,
        AlertComponent,
        DropDownDirective,
        CommonModule
    ]
})

export class SharedModule {

}
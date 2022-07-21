import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
    declarations: [

    ],
    exports: [
        TableModule,
        ButtonModule,
        SplitButtonModule,
        TabViewModule,
        CheckboxModule,
        DropdownModule,
        InputTextModule,
        RadioButtonModule,
        InputNumberModule
    ]
})
export class PrimeModule { }

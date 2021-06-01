import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [
        CommonModule,
        RouterModule
    ],
    declarations : [
        HeaderComponent
    ],
    providers : [

    ],
    exports : [
        HeaderComponent
    ]
})

export class CoreModule {}
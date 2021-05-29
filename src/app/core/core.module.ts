import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header.component";

import { CommonModule } from "@angular/common";

@NgModule({
    imports : [
        CommonModule
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
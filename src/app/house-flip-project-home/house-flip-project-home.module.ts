import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { HouseFlipProjectHomeComponent } from "./house-flip-project-home.component";
import {HouseFlipProjectHomeRoutingModule} from "~/app/house-flip-project-home/house-flip-project-home-routing.module";

@NgModule({
    imports: [
        NativeScriptModule,
        HouseFlipProjectHomeRoutingModule
    ],
    declarations: [
        HouseFlipProjectHomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HouseFlipProjectHomeModule { }

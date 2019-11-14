import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { HouseFlipProjectHomeComponent } from "./house-flip-project-home.component";
import {HouseFlipProjectHomeRoutingModule} from "~/app/house-flip-project-home/house-flip-project-home-routing.module";
import { NgShadowModule} from "nativescript-ngx-shadow";

@NgModule({
    imports: [
        NativeScriptModule,
        HouseFlipProjectHomeRoutingModule,
        NgShadowModule
    ],
    declarations: [
        HouseFlipProjectHomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HouseFlipProjectHomeModule { }

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule, routes} from "~/app/app-routing.module";
import { AppComponent } from "./app.component";
import {FlippinNotesService} from "~/app/services/flippin-notes.service";
import {HttpClientModule} from "@angular/common/http";
import {NativeScriptRouterModule} from "nativescript-angular";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {HomeModule} from "~/app/home/home.module";
import {FlipListModule} from "~/app/flip-list/flip-list.module";
import {HouseFlipProjectHomeModule} from "~/app/house-flip-project-home/house-flip-project-home.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HomeModule,
        FlipListModule,
        HouseFlipProjectHomeModule,
        NativeScriptUISideDrawerModule,
        HttpClientModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
    ],
    providers: [FlippinNotesService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

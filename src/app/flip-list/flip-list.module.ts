import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {FlipListRoutingModule} from "~/app/flip-list/flip-list-routing.module";
import {FlipListComponent} from "~/app/flip-list/flip-list.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FlipListRoutingModule
    ],
    declarations: [
        FlipListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FlipListModule { }

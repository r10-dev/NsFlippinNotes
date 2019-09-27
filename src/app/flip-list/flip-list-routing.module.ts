import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {FlipListComponent} from "~/app/flip-list/flip-list.component";

const routes: Routes =[

    { path: "house-flip-list", component: FlipListComponent}


];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FlipListRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HouseFlipProjectHomeComponent } from "./house-flip-project-home.component";

const routes: Routes = [

    { path: "flip-project-home/:id", component: HouseFlipProjectHomeComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HouseFlipProjectHomeRoutingModule { }

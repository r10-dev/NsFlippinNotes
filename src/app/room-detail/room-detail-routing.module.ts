import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RoomDetailComponent } from "./room-detail.component";

const routes: Routes = [

    { path: "room-detail/:id", component: RoomDetailComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HouseFlipProjectHomeRoutingModule { }

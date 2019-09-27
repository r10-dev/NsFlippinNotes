import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {NativeScriptModule} from "nativescript-angular/nativescript.module";




export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }


];

@NgModule({
    imports: [NativeScriptModule, NativeScriptRouterModule]
})
export class AppRoutingModule { }

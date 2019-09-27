import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {EventData} from "tns-core-modules/data/observable";
import {Button} from "tns-core-modules/ui/button";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    count: number;
    constructor( private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.count = 0;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    buttonTap(args: EventData) {
        const button = <Button>args.object;
        ++this.count;
        console.log(this.count);

    }

    routerAction() {
        this.router.navigate(["house-flip-list"]);
    }
}

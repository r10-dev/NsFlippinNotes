import { Component, OnInit } from '@angular/core';
import {FlippinNotesService} from "~/app/services/flippin-notes.service";
import { fromObject, fromObjectRecursive, Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { Router } from "@angular/router";

import { Project } from "~/app/models/project_models";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
@Component({
  selector: 'house-flip-list',
  templateUrl: './flip-list.component.html'
})

export class FlipListComponent implements OnInit {
    // @ts-ignore
    list: Observable<Project[]>;
  constructor(private flippin: FlippinNotesService, private router: Router) { }
  CDN_URL = 'https://res.cloudinary.com/erickroberts-com/image/upload/v1567471662/';
  ngOnInit() {
      this.list = this.flippin.getProjectsList('Auth0|1340897ASDF787');
      console.log(this.list)
  }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    routerAction(id: any) {
        this.router.navigate(["flip-project-home", id])
    }
}

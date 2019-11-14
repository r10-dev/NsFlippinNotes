import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {Project, Room} from '~/app/models/project_models';
import {FlippinNotesService} from "~/app/services/flippin-notes.service";
import { Router } from "@angular/router";
import {Observable} from "tns-core-modules/data/observable";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "house-flip-project-home", loadChildren: "./house-flip-project-home/house-flip-project-home.module#HouseFlipProjectHomeModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "flip-project-home",
    moduleId: module.id,
    templateUrl: "./house-flip-project-home.component.html"
})
export class HouseFlipProjectHomeComponent implements OnInit {
    id: number;
    roomsGridLayout: string;
    projectDetail: Project;
    CDN_URL = 'https://res.cloudinary.com/erickroberts-com/image/upload/v1567471662/';
    // @ts-ignore
    project: Observable<Project>;
    rooms: Room[];
    constructor( private route:ActivatedRoute, private cms: FlippinNotesService, private router: Router) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        * whny
        *************************************************************/
    }
    routerAction(id: any) {
        this.router.navigate(["room-detail", id])
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.roomsGridLayout = "auto";
        this.cms.getProject(this.id).subscribe(data => {
            this.projectDetail = data;
            this.cms.getProjectRoomList(this.id).subscribe(data => {
                this.rooms = data;
            });
        });


    }
}

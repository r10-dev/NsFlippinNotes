import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {Project, ProjectData, Room} from '~/app/models/project_models';
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
    projectSummary: ProjectData;
    constructor( private route:ActivatedRoute, private cms: FlippinNotesService, private router: Router) {
        this.projectSummary = new ProjectData();
        this.projectSummary.total_sqft = 0;
    }
    routerAction(id: any) {
        this.router.navigate(["room-detail", id])
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });

        this.cms.getProject(this.id).subscribe(data => {
            this.projectDetail = data;
            this.projectSummary.room_count = data.rooms.length;
            this.projectSummary.expense_count = data.expenses.length;
            this.projectSummary.task_count = data.tasks.length;
            data.rooms.forEach((value) => {
                console.log(this.projectSummary.total_sqft);
                this.projectSummary.total_sqft = this.projectSummary.total_sqft + value.area;
            });
            this.cms.getProjectRoomList(this.id).subscribe(data => {
                this.rooms = data;
            });
        });


    }
}

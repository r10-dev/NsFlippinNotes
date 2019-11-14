import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "tns-core-modules/data/observable";
import {Project, Room} from "~/app/models/project_models";

const projectBase = 'https://api.r10dev.com/projects/';
const roomsBase = 'https://api.r10dev.com/rooms/';
@Injectable({
  providedIn: 'root'
})
export class FlippinNotesService {
// @ts-ignore
    list: Observable<Project[]>;
    // @ts-ignore
    project: Observable<Project>;
    // @ts-ignore
    rooms: Observable<Room>;
  constructor(private client: HttpClient) { }

  getProjectsList(authid: string): any{
        if (!this.list) {
            const authUrl = projectBase + '?user_authentication_eq=' + authid;
            this.list = this.client.get(authUrl);
            console.log('it is not caching');
        }

        return this.list;
  }

  getProject(id: number) {

      const url = projectBase + id;
      if(!this.project)
      {
          this.project = this.client.get(url);

      }


      return this.project;
  }
  getProjectTaskList(authid: string): any {

  }
// TODO: Add authentication to the requests or not
  getProjectRoomList(projectid: number): any {
    // https://api.r10dev.com/rooms?project_eq=4
      if(!this.rooms) {
          const roomsUrl = roomsBase + '?project_eq=' +projectid;
          this.rooms = this.client.get(roomsUrl);
      }

      return this.rooms;
  }
  addProject(project: any): any {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        console.log(JSON.stringify(project));
        return this.client.post(projectBase, JSON.stringify(project), httpOptions).subscribe(
          data => { console.log(data); },
          err => {
            console.log(err);
          }
    );
  }
  addProjectTask() {

  }
  addProjectRoom() {

  }
  updateProject() {

  }
  updateProjectTask() {

  }
  updateProjectRoom() {

  }


}

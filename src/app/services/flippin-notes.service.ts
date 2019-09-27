import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const projectBase = 'https://api.r10dev.com/projects/';
@Injectable({
  providedIn: 'root'
})
export class FlippinNotesService {

  constructor(private client: HttpClient) { }

  getProjectsList(authid: string): any{
    const authUrl = projectBase + '?user_authentication_eq=' + authid;
    return this.client.get(authUrl);
  }

  getProject(id: number) {
      const url = projectBase + id;
      return this.client.get(url);
  }
  getProjectTaskList(authid: string): any {

  }

  getProjectRoomList(projectName: string): any {

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

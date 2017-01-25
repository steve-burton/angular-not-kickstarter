import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, contact: string, description: string, amount: number, purpose: string, reward: string, type: string, image: string) {
    var newProject: Project = new Project(name, contact, description, amount, purpose, reward, type, image);
    this.projectService.addProject(newProject);
  }

}

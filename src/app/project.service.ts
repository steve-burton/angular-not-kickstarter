import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
  getProjectById(projectId: string) {
    return this.angularFire.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject) {
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                  contact: localUpdatedProject.contact,
                                  description: localUpdatedProject.description,
                                  amount: localUpdatedProject.amount,
                                  purpose: localUpdatedProject.purpose,
                                  reward: localUpdatedProject.reward,
                                  type: localUpdatedProject.type,
                                  image: localUpdatedProject.image});
  }

  deleteProject(localProjectToDelete) {
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

}

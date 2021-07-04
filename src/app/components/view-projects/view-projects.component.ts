import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../services/projects.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.css'],
})
export class ViewProjectsComponent implements OnInit {
  constructor(private projectservice: ProjectsService) {}

  Projects: any;
  res: any;
  ngOnInit(): void {
    this.projectservice.GetProjects().subscribe((data) => {
      this.res = data;
      //console.log(this.res);

      this.Projects = this.res.body;
      //  console.log(this.Projects);
    });
  }

  projectName: any;
  projectId: any;
  Description: any;
  CodeUrl: any;
  GitUserName: any;
  YoutDubeUrl: any;
  RepoName: any;
  projectDetails(id: any) {
    console.log(id);
    this.projectservice.GetProjectById(id).subscribe((data: any) => {
      console.log(data.body);
      this.projectId = data.body.id;
      this.projectName = data.body.name;
      this.YoutDubeUrl = data.body.youtDubeUrl;
      this.Description = data.body.description;
      this.CodeUrl = data.body.codeUrl;
      console.log( this.CodeUrl, data.body.codeUrl)
      this.GitUserName = data.body.gitUserName;
      this.RepoName = data.body.repoName;
    });
  }
}

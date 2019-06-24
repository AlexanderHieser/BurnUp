import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubAPIService } from '../services/git-hub-api.service';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

  project:any;
  issues:any;
  constructor(private route: ActivatedRoute, private github: GitHubAPIService) { 

  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      console.log(param);
      if (this.github.projects) {
        this.project = this.github.projects[param.id];
        console.log("getIssues",this.project)
        this.github.getIssues("https://api.github.com/repos/AlexanderHieser/appmodeler/issues").then((data) =>  {
          console.log(data);
          this.issues = data;
        });
      }
    });
  
  }

}

import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;

  repositories: any[] = [];

  errorMessage: string = '';

  fetchingData: boolean = false;

  constructor(
    private githubApi: GithubService
  ) { }

  handleClick() {
    if (this.fetchingData) {
      return;
    }
    this.fetchRepositories()
  }

  fetchRepositories() {
    this.fetchingData = true;
    this.githubApi.getRepoData(this.username).subscribe(
      (response) => {
        this.fetchingData = false;
        this.repositories = response;
      },
      (error) => {
        this.fetchingData = false;
        this.errorMessage = error.message;
      }
    )
  }

}

import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = 'karankraina';

  repositories: any[] = [];

  errorMessage: string = '';

  fetchingData: boolean = false;

  constructor(
    private githubApi: GithubService
  ) { }

  ngOnInit() {
    this.fetchRepositories()
  }

  handleClick() {
    if (this.fetchingData) {
      return;
    }
    this.fetchRepositories()
  }

  handleReset() {
    this.username = '';
    this.repositories = [];
    this.fetchingData = false;
    this.errorMessage = '';
  }

  fetchRepositories() {
    this.fetchingData = true;
    this.githubApi.getRepoData(this.username).subscribe(
      (response) => {
        this.fetchingData = false;
        this.errorMessage = '';
        this.repositories = response.map(repository => {
          const { owner, ...rest } = repository;
          return {
            owner: owner.login,
            ...rest
          };
        });
      },
      (error) => {
        this.fetchingData = false;
        this.errorMessage = error.message;
      }
    )
  }

}

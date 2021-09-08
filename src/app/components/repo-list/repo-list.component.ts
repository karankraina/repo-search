import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit, OnChanges {

  @Input() repositories: any[] = [];
  filteredRepositories: any[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.repositories);
    this.filteredRepositories = this.repositories;
  }

  ngOnChanges(change) {
    this.filteredRepositories = this.repositories;
  }

  filterRepoName(event) {
    const filterKeyword = event.target.value;
    if (filterKeyword === '') {
      this.filteredRepositories = this.repositories;
      return;
    }
    this.filteredRepositories = this.repositories.filter(repo => {
      const repoName = repo.name;

      return repoName.toLowerCase().indexOf(filterKeyword.toLowerCase()) > -1;
    });
  }

}

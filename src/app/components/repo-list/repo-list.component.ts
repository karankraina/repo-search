import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit, OnChanges {

  @Input() repositories: any[] = [];
  filteredRepositories: any[];

  isReverseSort: boolean = false;

  columns: {label: string, key: string}[] = [
    {
      label: 'Owner',
      key: 'owner'
    },
    {
      label: 'Name',
      key: 'name'
    },
    {
      label: 'Description',
      key: 'description'
    },
    {
      label: 'Stars',
      key: 'stargazers_count'
    },
    {
      label: 'Open Issues',
      key: 'open_issues_count'
    },
    {
      label: 'Watchers',
      key: 'watchers_count'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.repositories);
    this.filteredRepositories = this.repositories;
  }

  ngOnChanges() {
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

  sort(propName, isReverse){
    if (isReverse == true){
      this.filteredRepositories.sort((a, b) => `${a[propName]}`.toLowerCase() < `${b[propName]}`.toLowerCase() ? 1 : `${a[propName]}`.toLowerCase() > `${b[propName]}`.toLowerCase() ? -1 : 0)
      this.isReverseSort = !this.isReverseSort
  }
  else{
      this.filteredRepositories.sort((a, b) => `${a[propName]}`.toLowerCase() > `${b[propName]}`.toLowerCase() ? 1 : `${a[propName]}`.toLowerCase() < `${b[propName]}`.toLowerCase() ? -1 : 0)
      this.isReverseSort = !this.isReverseSort
  }

  }
}

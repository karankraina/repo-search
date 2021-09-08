import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { sortArray, filterArray } from 'src/app/utils/array.utils';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit, OnChanges {

  @Input() repositories: any[] = [];
  filteredRepositories: any[];

  isReverseSort: boolean = true;
  sortedColumn: string = 'name';

  columns: { label: string, key: string }[] = [
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
    this.filteredRepositories = filterArray(this.repositories, 'name', filterKeyword);
    
  }

  sort(propName, isReverse) {
    this.sortedColumn = propName;
    this.filteredRepositories = sortArray(this.filteredRepositories, propName, isReverse);
    this.isReverseSort = !this.isReverseSort;
  }
}

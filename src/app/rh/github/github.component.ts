import { GitService } from './git.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  search: string = '';
  users: any[] = [];
  usersResult: any[] = [];
  constructor(private gitService: GitService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.gitService.getUsers()
        .subscribe((users: any[]) => {
         this.usersResult = this.users = users;
        })
  }

  searchUsers(data: string) {
    this.usersResult = this.users.filter(user => user.login.toLowerCase().includes(data.toLowerCase()))

    if(!this.usersResult.length) {
      this.gitService.searchUsersDist(data)
          .subscribe(res => {

            let { items }: any = res;

            this.usersResult = items;
            this.users = [...this.users, ...items];
          })
    }
  }

}

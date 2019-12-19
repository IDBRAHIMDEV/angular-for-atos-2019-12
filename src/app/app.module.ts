import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';

import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';

import { HttpClientModule } from '@angular/common/http';
import { GithubComponent } from './rh/github/github.component';
import { SearchComponent } from './search/search.component';
import { VotesComponent } from './votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    TableComponent,
    PostsComponent,
    GithubComponent,
    SearchComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

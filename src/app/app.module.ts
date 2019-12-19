import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

import { HttpClientModule } from '@angular/common/http';
import { GithubComponent } from './rh/github/github.component';
import { SearchComponent } from './search/search.component';
import { VotesComponent } from './votes/votes.component';
import { PanelComponent } from './panel/panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/blog", pathMatch: 'full' },
  { path: "blog", component: PostsComponent },
  { path: "git", component: GithubComponent },
  { path: "teachable", component: CoursesComponent },
  { path: "**", component: PageNotFoundComponent }
]

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
    VotesComponent,
    PanelComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

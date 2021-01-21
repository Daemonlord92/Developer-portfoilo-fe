import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogComponent } from './blog/blog.component';
import { BlogNewComponent } from './blog/blog-new.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugTrackerNewComponent } from './bug-tracker/bug-tracker-new.component';

@NgModule({
  declarations: [
    AppComponent,
    JwPaginationComponent,
    HomepageComponent,
    BlogComponent,
    BlogNewComponent,
    ProjectsComponent,
    ContactComponent,
    AboutMeComponent,
    BugTrackerComponent,
    BugTrackerNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

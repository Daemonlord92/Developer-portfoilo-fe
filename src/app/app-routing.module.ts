import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsNewComponent } from './projects/projects-new.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugTrackerNewComponent } from './bug-tracker/bug-tracker-new.component';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: HomepageComponent },
{ path: 'projects', component: ProjectsComponent }, 
{ path: 'projects/new', component: ProjectsNewComponent }, 
{ path: 'contact', component: ContactComponent },
{ path: 'about-me', component: AboutMeComponent },
{ path: 'bug-tracker', component: BugTrackerComponent },
{ path: 'bug-tracker/new', component: BugTrackerNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

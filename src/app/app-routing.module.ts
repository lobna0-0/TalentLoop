import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CanditatesComponent } from './canditates/canditates.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PostAJopComponent } from './post-a-jop/post-a-jop.component';
import { WantAJopComponent } from './want-a-jop/want-a-jop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default Route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'canditates', component: CanditatesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Post-a-jop', component: PostAJopComponent },
  { path: 'want-a-jop', component: WantAJopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


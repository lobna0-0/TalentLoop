import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CanditatesComponent } from './canditates/canditates.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { WantAJopComponent } from './want-a-jop/want-a-jop.component';
import { PostAJopComponent } from './post-a-jop/post-a-jop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HotJopsComponent } from './hot-jops/hot-jops.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { CounterTestimonialsComponent } from './counter-testimonials/counter-testimonials.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CanditatesComponent,
    BlogComponent,
    ContactComponent,
    WantAJopComponent,
    PostAJopComponent,
    NavbarComponent,
    FooterComponent,
    HotJopsComponent,
    TopCategoriesComponent,
    CounterTestimonialsComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

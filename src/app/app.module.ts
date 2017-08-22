import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsManageComponent } from './news-manage/news-manage.component';
import {NewsService} from './services/news.service';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './auth.guard';
import {AuthorizeGuard} from './authorize.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'news', component: NewsComponent, canActivate: [AuthGuard]},
  {path: 'news-manage', component: NewsManageComponent,
    children: [
      { path: 'add-news', component: AddNewsComponent },
      { path: 'edit-news/:id' , component: EditNewsComponent }

  ], canActivate: [AuthGuard, AuthorizeGuard]},
];




@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsManageComponent,
    NewsManageComponent,
    AddNewsComponent,
    EditNewsComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NewsService, AuthenticationService, AuthGuard, AuthorizeGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

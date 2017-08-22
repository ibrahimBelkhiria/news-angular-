import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../news';
@Component({
  selector: 'app-news-manage',
  templateUrl: './news-manage.component.html',
  styleUrls: ['./news-manage.component.css']
})
export class NewsManageComponent implements OnInit {

  title: string ;
  description: string;
  errorMessage: string;
  news : Array<News>=[];
  constructor(private _newsService: NewsService) { }

  ngOnInit() {
    this.getNews();

  }

  getNews(){
    this._newsService.getNews().subscribe(news =>
      this.news = news , error => this.errorMessage = <any> error);
  }


   deleteNews(id) {
        this._newsService.deleteNews(id).subscribe();


   }




}

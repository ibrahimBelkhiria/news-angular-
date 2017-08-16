import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../news';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  news :Array<News>=[];
  errorMessage: string;
  constructor(private _newsService: NewsService) { }

  getNews() {
       this._newsService.getNews().subscribe (
              news => this.news = news, error => this.errorMessage = <any> error);
   }



  ngOnInit() {

    this.getNews();
  }

}

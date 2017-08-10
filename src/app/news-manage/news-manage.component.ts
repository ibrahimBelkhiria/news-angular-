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
  news: News[];
  constructor(private _newsService: NewsService) { }


  ngOnInit() {

  }

   deleteNews() {

   }




}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from '../services/news.service';
import {News} from '../news';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  private id: number;
  news: News[];

  constructor(private _newsService: NewsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.showNews(this.id);

  }



  showNews(id) {
    this._newsService.getNew(id).subscribe((news) => {
      this.news = news['result'];
      }


    );
  }


}

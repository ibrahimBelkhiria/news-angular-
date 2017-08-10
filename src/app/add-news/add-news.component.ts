import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  title: string ;
  description: string;


  constructor(private _newsService: NewsService) { }

  addNews(title, description) {

    let news: any;
    news = {title: title, description: description};
    this._newsService.addNews(news).subscribe(( news => {

      this.title = '';
      this.description = '';
    }));


  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../news';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  private id: number;
  title: string;
  description: string;
  error: string;

  constructor(private _newsService: NewsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }


  editNews(title, description) {
    let news: any;
    news = {title: title, description: description};
    this._newsService.updateNews(news, this.id).subscribe(( result => {

      if (result.code === 0) {
        console.log(result);
      } else {

        this.error = 'validation errors!';

      }


    }));


  }


}

import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../news';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  title: string ;
  description: string;
    error='';

  constructor(private router:Router ,private _newsService: NewsService) { }

  addNews(title, description) {

    let news: any;
    news = {title: title, description: description};
    this._newsService.addNews(news).subscribe(( result => {
      console.log(result);
      if (result.code==0){
        this.router.navigate(['/news']);
      }else {

        this.error = 'validation errors!';

      }
    }));




  }

  ngOnInit() {
  }

}

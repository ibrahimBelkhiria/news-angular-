import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../news';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  title: string ;
  description: string;
    errors= [];

  constructor(private router: Router , private _newsService: NewsService, private _flashMessage: FlashMessagesService) { }

  addNews(title, description) {

    let news: any;
    news = {title: title, description: description};
    this._newsService.addNews(news).subscribe(( result => {

        this._flashMessage.show('News Created', { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/news']);

    }), addError => this.errors = addError);




  }

  ngOnInit() {
  }

}

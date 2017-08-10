import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {News} from '../news';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  constructor(private _newsService: NewsService) { }

  ngOnInit() {
  }


  editNews(title, description) {

  }



}

import { Injectable } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {News} from '../news';
import {AuthenticationService} from './authentication.service';
@Injectable()
export class NewsService {

  private uri= 'http://127.0.0.1:8000/api/news/';



  constructor(private http: Http, private authenticationService: AuthenticationService ) {}

    getNews(): Observable<any[]> {
      const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
       return  this.http.get(this.uri, headers).map(res => <News[]>  res.json() ).catch(this.handelError);


    }

    addNews(news: News) {
      const  headers = new Headers();
      headers.append('content-type', 'application/json');
        return this.http.post(this.uri, JSON.stringify(news), {headers : headers}).map(res => res.json());
    }



  updateNews(news: News) {
    const  headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.put(this.uri + news.id, JSON.stringify(news), {headers : headers}).map(res => res.json());
  }


  deleteNews(id: any) {

    return this.http.delete(this.uri + id).map(res => res.json());
  }


    private handelError(error: Response) {

        return Observable.throw(error.json().error || 'server error');

    }


}


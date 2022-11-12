import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
   private readonly host = 'https://publishing-house-service.herokuapp.com'


  constructor(
    private readonly _http: HttpClient
  ) { }

  getApiStatus(){
    return this._http.get<{ message: string }>(this.host);
  }

  postApiBook(book: Book){
        this._http.post(this.host + "create", book);
  }

}
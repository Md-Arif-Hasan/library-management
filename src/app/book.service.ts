import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  books: Book[] =[{id:1, name:"Arif", year:2002, availablity: true}, {id:2, name:"Hasan", year:2002, availablity: false}]
        
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  delete_row(index: number) {
    for(let i = 0; i < this.books.length; ++i){
      if (i === index) {
          this.books.splice(i,1);
      }
  }
  }
}

import { ListKeyManager } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-regist-book',
  templateUrl: './regist-book.component.html',
  styleUrls: ['./regist-book.component.css']
})
export class RegistBookComponent implements OnInit {
  
  authors!: string[] ;
  year!: number;
  name!: string;
  id!: string;
  summary!: string;
  msg!: string

  constructor(
     private http: HttpClient,
     private router: Router,
     private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let {id} = params;
        this.id = id;
        this.name = "Book name"
      } 
    })
  }

  regist(): void{
    let book: Book = {
      name: this.name,
      authors: [
        'eduardo'
      ],
      year: 2003,
      summary: "Summary"
    }


    // .subscribe({
    //   next: () => {
    //     this.router.navigate(["pages/book/list"]);
    //   },
    //   error:(error)=> {
    //     if(error.status === 400){
    //       this.msg = "Validation error";
    //     }else if (error.status === 0){
    //       this.msg = "API not running";
    //     }
    //   }
    // });
  }

}

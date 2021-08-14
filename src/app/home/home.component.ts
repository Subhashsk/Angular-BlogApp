import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs = [];

  constructor(public blogHttpService: BlogHttpService) {
    console.log("Home component constructor called");

  }

  ngOnInit(): void {
    console.log("Home component onInit called");
    //this.allBlogs = this.blogHttpService.getAllBlogs();



    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      (data: { [x: string]: any[]; }) => {
        console.log(data);
        this.allBlogs = data["data"];
      },
      (error: { errorMessage: any; }) => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    console.log(this.allBlogs);
  }

  ngOnDestroy(): void {
    console.log("Home component destroyed")
  }
}

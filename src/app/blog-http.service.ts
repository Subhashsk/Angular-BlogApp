import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observale related code
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';




@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs: any;
  public currentBlog: any;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'MDAyYWY3NzkzYjY3YzI5ZDU0Njc5MDBmZDFhM2UwYjZmOTlmOTZkZTViNmMwODVlMDM1MjA5OGY4MDBmNWI2NjZjN2U2MTdjMDBmYmZiMzM1MGY0MTczYTI4NzY2YzQxZmZlZGJiMzQ4ZjQyNDhlNDQxNmQ3YTM4NDI5NjA3ZTkzMQ=='

  constructor(private _http:HttpClient) {
    console.log("blog-http service was called");

  }

  //exception handler

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  //methods to return all the Blogs
  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  
  }


  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId: string | null): any {
    //using for of loop from type script
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken );
    return myResponse;

  }


  public createBlog(blogData): any {

  
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;

  } // end create blog

  public deleteBlog(blogId): any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse;
  } // end delete blog


  public editBlog(blogId, blogData) : any {

    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse
  }
}

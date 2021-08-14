import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  // declare a dummy blog variable here
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.8542",
      "created": "2017-10-20T12:20:47.8542",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.6782",
      "created": "2017-10-21T12:47:51.6782",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big text</h1><p>Small text</p>",
      "description": "This is description of the example blog and this is the blog",
      "title": "This is example blog"
    },
    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.4072",
      "created": "2017-11-14T14:15:54.4072",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is the blog body. this is the blog body. this is the blog body",
      "description": "This is the third blog description",
      "title": "This is third blog"
    }
  ]



  public currentBlog: any;

  constructor() {
    console.log("service constructor is called");
  }

  //methods to return all the Blogs
  public getAllBlogs(): any{

    return this.allBlogs;
  }


  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId: string | null): any {
    //using for of loop from type script

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
    return this.currentBlog;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from '../blog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog: any;


  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService, private toastr: ToastrService, private location: Location) {
    console.log("blog-view constructor is called");

  }

  ngOnInit(): void {
    console.log("blog view ngOnitCalled");
    // getting blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      (data: { [x: string]: any; }) => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      (error: { errorMessage: any; }) => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    )


  }

  public deleteThisBlog(): any {

    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog Deleted Succesfully', 'Success!');
        setTimeout(() =>{
          this.router.navigate(['/home']);
        }, 1000)

      },
      error => {
        console.log("some error occured")
        console.log(error.errorMessage)
        this.toastr.error('Some error occured', 'Error');
      }

    )



  } // end delete this blog

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log("blog view destroyed")
  }

}

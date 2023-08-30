import { Component } from '@angular/core';
import { RedditModel } from 'src/app/models/reddit-model';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  listOfPosts:RedditModel = {} as RedditModel;

  constructor(private _redditService:RedditService){}

  ngOnInit(){
    //console.log(1);
    //this section does not fire until you get a response from the api
    this._redditService.getPosts().subscribe((response:RedditModel) => {
     // console.log(2);
      console.log(response);
      //saving response in a varaiable
      this.listOfPosts = response;
     // console.log(this.DevResponse);
    });
    //console.log(3);
  }

}

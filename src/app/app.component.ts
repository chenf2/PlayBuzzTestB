import { Component, OnInit } from '@angular/core';
import { FeedsProvidersLoaderService } from './feedServices/feeds-providers-loader.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  feedDataResult:any;
  title:string;
  views:string;
  url:any;
  errorOnResponse: boolean = false;
  errorMessages: Array<string> = ['not supported publisher'];

  // Create an instance of the DataService through dependency injection
  constructor(private _feedProvidersService: FeedsProvidersLoaderService,private sanitizer:DomSanitizer) {

  }

  ngOnInit() {
    let self = this;
    // Access the Data Service's
    this._feedProvidersService.getFeed().subscribe(res => {

      if(self.errorMessages.indexOf(res) > -1) {
        self.errorOnResponse = true;
        return;
      }

      this.feedDataResult = res;
      this.title = this.feedDataResult.title;
      this.views = this.feedDataResult.views;
      this.url = this.feedDataResult.url;

    });
  }

  getEmbedUrl(){
    if(typeof this.url === 'undefined')
    {
      return;
    }

    return  this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}

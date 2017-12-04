import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the Http Module and our FeedsProvidersLoaderService Service
import { HttpModule } from '@angular/http';
import { FeedsProvidersLoaderService } from './feedServices/feeds-providers-loader.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FeedsProvidersLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

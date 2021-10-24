import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FileListComponent } from './components/file-list/file-list.component';
import { FileItemComponent } from './components/file-item/file-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

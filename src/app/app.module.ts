import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ImageviewerComponent } from './components/imageviewer/imageviewer.component';
import { SingleimageComponent } from './components/singleimage/singleimage.component';
import { FindPipe } from './pipes/find.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageviewerComponent,
    SingleimageComponent,
    FindPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

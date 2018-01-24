import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { AdminComponent } from './admin/admin.component';

// export const firebaseConfig = {
//   apiKey: masterFirebaseConfig.apiKey,
//   authDomain: masterFirebaseConfig.authDomain,
//   databaseURL: masterFirebaseConfig.databaseURL,
//   storageBucket: masterFirebaseConfig.storageBucket
// };


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    ProjectDetailComponent,
    ProjectGalleryComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentListComponent } from './content-list/content-list.component';
import { HeaderComponent } from './header/header.component';

import { AppRouting } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleContentComponent } from './single-content/single-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleContentComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

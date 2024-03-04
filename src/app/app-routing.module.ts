import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentListComponent } from './content-list/content-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleContentComponent } from './single-content/single-content.component';




const routes: Routes = [
  {path:'blog/:id', component: SingleContentComponent},
  {path:'blog', component: ContentListComponent},
  {path:'', component: LandingPageComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})

export class AppRouting{

}

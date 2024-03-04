import { Component, Input } from '@angular/core';
import { Content } from '../model/content.model';

import { ContentsService } from '../content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() content!: Content;
  buttonState!: boolean;
  constructor(private contentService: ContentsService, private router: Router){
    this.buttonState = false;
  }
  likeFunction() {
    this.buttonState === false ? (this.contentService.like(this.content.id), this.buttonState = true)  : (this.contentService.unlike(this.content.id),this.buttonState = false);
  }
  onViewContent(){
    this.router.navigateByUrl('blog/'+this.content.id);
  }
}

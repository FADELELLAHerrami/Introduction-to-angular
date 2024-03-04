import { Component, OnInit } from '@angular/core';
import { Content } from '../model/content.model';
import { ContentsService } from '../content.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-content',
  templateUrl: './single-content.component.html',
  styleUrls: ['./single-content.component.scss']
})
export class SingleContentComponent implements OnInit{
  content!: Content;
  buttonState!: boolean;
  constructor(private contentService: ContentsService,private route: ActivatedRoute){
    this.buttonState = false;
    const snapId = +this.route.snapshot.params['id'];
    const content = this.contentService.getContentById(snapId);
    if(content){
      this.content = content;
    }
  }
  ngOnInit() {

  }
  likeFunction() {
    this.buttonState === false ? (this.contentService.like(this.content.id), this.buttonState = true)  : (this.contentService.unlike(this.content.id),this.buttonState = false);
  }
}

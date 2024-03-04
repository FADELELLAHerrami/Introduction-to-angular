import { Component, OnInit } from '@angular/core';
import { Content } from '../model/content.model';

import { ContentsService } from '../content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents!: Content[];
  constructor(private contentsService: ContentsService){
  }
  ngOnInit() {
    this.contents = this.contentsService.getContents();
  }
}

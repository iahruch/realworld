import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tag-feed',
  styleUrls: ['./tagFeed.component.scss'],
  templateUrl: './tagFeed.component.html',
})
export class TagFeedComponent implements OnInit {
  apiUrl!: string;
  tagName!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
      console.log('params ', this.tagName);
    });
  }
}

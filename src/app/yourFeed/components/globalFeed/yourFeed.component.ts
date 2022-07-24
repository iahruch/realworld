import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-feed',
  styleUrls: ['./yourFeed.component.scss'],
  templateUrl: './yourFeed.component.html',
})
export class YourFeedComponent {
  apiUrl: string = '/articles/feed';
  constructor() {}
}

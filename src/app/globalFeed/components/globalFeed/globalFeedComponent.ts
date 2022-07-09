import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  styleUrls: ['./globalFeedComponent.scss'],
  templateUrl: './globalFeedComponent.html',
})
export class globalFeedComponent {
  apiUrl: string = '/articles';
  constructor() {}
}

import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeedService } from '../../services/feed.service';
import { getFeedAction } from '../../store/actions/getFeed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { GetFeedResposeInterface } from '../../types/getFeedResponse.interface';

@Component({
  selector: 'app-feed',
  styleUrls: ['./feed.component.scss'],
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';

  isLoading$!: Observable<boolean>;
  errors$!: Observable<string | null>;
  feed$!: Observable<GetFeedResposeInterface | null>;

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrl }));
    this.initializeValues();
  }
  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }
}

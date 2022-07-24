import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, delay, tap } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { environment } from '../../../../../../environments/environment.prod';
import { FeedService } from '../../services/feed.service';
import { getFeedAction } from '../../store/actions/getFeed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { GetFeedResposeInterface } from '../../types/getFeedResponse.interface';
import { parseUrl, stringify } from 'query-string';

@Component({
  selector: 'app-feed',
  styleUrls: ['./feed.component.scss'],
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input() apiUrl: string = '';

  isLoading$!: Observable<boolean>;
  errors$!: Observable<string | null>;
  feed$!: Observable<GetFeedResposeInterface | null>;
  queryParamsSubscription!: Subscription;

  total!: number | undefined;
  limit = Number(environment.limit);
  baseUrl: string = '';
  currentPage!: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      changes['apiUrl'].currentValue &&
      changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue;

    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }

  ngOnInit(): void {
    console.log(this.apiUrl);
    this.initializeValues();
    this.initializeListeners();
  }
  initializeValues(): void {
    this.isLoading$ = this.store.pipe(
      delay(400),
      select(isLoadingSelector),
      tap(i => console.log(i))
    );
    this.errors$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }
  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParamMap.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['params']['page'] || '1');
        console.log('this.currentPage >> ', this.currentPage);
        this.fetchFeed();
      }
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrl);
    console.log('parsedUrl', parsedUrl);

    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    console.log('stringifiedParams >>', stringifiedParams);

    const apiUrlWIthParams = `${parsedUrl.url}?${stringifiedParams}`;
    console.log('apiUrlWIthParams >> ', apiUrlWIthParams);

    this.store.dispatch(getFeedAction({ url: apiUrlWIthParams }));
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}

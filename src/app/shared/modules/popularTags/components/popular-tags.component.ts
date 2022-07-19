import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { getPopularTags } from '../store/actions/getPopularTags';
import { isLoadingSelector, popularTagsSelector } from '../store/selectors';
import { PopularTagsType } from '../types/popularTagsType';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  constructor(private store: Store) {}
  popularTags$!: Observable<PopularTagsType | null>;
  isLoading$!: Observable<boolean>;

  ngOnInit(): void {
    this.store.dispatch(getPopularTags());
    this.initListeners();
  }
  initListeners(): void {
    this.isLoading$ = this.store.pipe(
      select(isLoadingSelector),
      tap(data => console.log('popular tags ', data))
    );
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
  }
}

import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggeInSelector } from 'src/app/auth/srote/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feedToggler.component.html',
})
export class FeedTogglerComponent {
  @Input() tagName!: string | null;

  isLoggedIn$!: Observable<boolean | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }
  initValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggeInSelector));
  }
}

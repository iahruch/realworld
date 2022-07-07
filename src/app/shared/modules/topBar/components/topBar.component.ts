import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  currentUserSelector,
  isAnonymouSelector,
  isLoggeInSelector,
} from 'src/app/auth/srote/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  isAnonymous$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUserInterface | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggeInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymouSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}

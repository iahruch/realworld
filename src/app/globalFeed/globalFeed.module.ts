import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggle.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { globalFeedComponent } from './components/globalFeed/globalFeedComponent';

const routes: Routes = [
  {
    path: '',
    component: globalFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [globalFeedComponent],
  exports: [],
  providers: [],
})
export class GlobalFeedModule {}

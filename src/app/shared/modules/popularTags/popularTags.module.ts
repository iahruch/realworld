import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopularTagsComponent } from './components/popular-tags.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularTagsService } from './services/getPopularTags.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PopularTagsEffect } from './store/effects/popularTags.effect';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([PopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}

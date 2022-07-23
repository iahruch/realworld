import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { FeedTogglerComponent } from './components/feedToggler.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}

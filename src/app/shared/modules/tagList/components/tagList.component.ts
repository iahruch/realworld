import { Component, Input } from '@angular/core';
import { PopularTagType } from 'src/app/shared/types/popularTagType';

@Component({
  selector: 'app-tag-list',
  styleUrls: ['./tagList.component.scss'],
  templateUrl: './tagList.component.html',
})
export class TagListComponent {
  @Input('tags') tagsProps!: PopularTagType[];
}

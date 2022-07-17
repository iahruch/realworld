import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('url') urlProps!: string;
  @Input('limit') limitProps: number = 0;
  @Input('total') totalProps!: number;
  @Input('currentPage') currentPageProps!: number | string;
  pagesCount!: number;
  pages!: Array<number>;

  constructor(private utilsService: UtilsService) {}
  ngOnInit() {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
    console.log('Pages ', this.pages);
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { PaginationComponent } from './components/pagination.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLibComponent } from './my-lib.component';
import { MyLibService } from '../public-api';

@NgModule({
  declarations: [MyLibComponent],
  providers: [MyLibService],
  imports: [CommonModule],
  exports: [MyLibComponent],
})
export class MyLibModule {}

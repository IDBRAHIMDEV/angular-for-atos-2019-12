import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic/statistic.component';


@NgModule({
  declarations: [StatisticComponent],
  imports: [
    CommonModule
  ],
  exports: [StatisticComponent]
})
export class ComptaModule { }

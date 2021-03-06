
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartCardComponent } from './chart-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    ChartCardComponent
  ],
  exports: [
    ChartCardComponent
  ]
})
export class ChartCardModule { }

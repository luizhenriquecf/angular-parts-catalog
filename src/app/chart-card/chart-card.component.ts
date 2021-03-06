import { Component, Input, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

import { Chart } from 'chart.js';

export enum ChartType {
  Pie,
  Line,
  Bar,
  Doughnut
}

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartCardComponent implements OnInit, AfterViewInit {
  static currentId = 1;

  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public chartType: ChartType;

  @Input()
  public chartData: any;

  @Input()
  public chartOptions: any;

  public chartId: string;

  public chart: Chart;

  constructor() {
  }

  public ngOnInit(): void {
    this.chartId = `canvas-${ChartCardComponent.currentId++}`;
  }

  public ngAfterViewInit(): void {
    switch (this.chartType) {
      case ChartType.Pie:
        this.chart = new Chart(this.chartId, {
          type: 'pie',
          data: this.chartData,
          options: this.chartOptions
        });
        break;
      case ChartType.Line:
        this.chart = new Chart(this.chartId, {
          type: 'line',
          data: this.chartData,
          options: this.chartOptions
        });
        break;
      case ChartType.Bar:
        this.chart = new Chart(this.chartId, {
          type: 'bar',
          data: this.chartData,
          options: this.chartOptions
        });
        break;
      case ChartType.Doughnut:
        this.chart = new Chart(this.chartId, {
          type: 'doughnut',
          data: this.chartData,
          options: this.chartOptions
        });
        break;
    }
  }
}

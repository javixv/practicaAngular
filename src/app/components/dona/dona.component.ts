import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
//import {  MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title : string = 'Sin información';

  @Input() labels : string[] = [ 'zzz', 'In-Store Sales1', 'Mail-Order Sales' ];
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}

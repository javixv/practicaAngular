import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  // // Doughnut
  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: [ 350, 450, 100 ] },
      
  //   ]
  // };
  // public doughnutChartType: ChartType = 'doughnut';

  public mislabels : string[] = [ 'Pan', 'Arina', 'Azucar' ];
  public data1 : any[] = [ 150, 300, 45 ]

}

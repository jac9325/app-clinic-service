import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

type ChartKey = 'Action - 1' | 'Another Action' | 'Something else is here';
type ChartTypeKey = 'line' | 'bar' | 'radar';

@Component({
  selector: 'graficos',
  standalone: true,
  imports: [ RouterModule, NgChartsModule, NgbDropdownModule, CommonModule ],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.sass'
})
export class GraficosComponent {
  
  public isBrowser: boolean;
  public selectedTitle: ChartKey = 'Action - 1';
  public chartType: ChartTypeKey = 'line'; // Valor predeterminado
  public chartDataMap: { [key in ChartKey]?: { type: ChartTypeKey, data: { data: number[], label: string }[] } } = {
    'Action - 1': {
      type: 'line',
      data: [
        { data: [330, 600, 260, 700], label: 'Account A' },
        { data: [120, 455, 100, 340], label: 'Account B' },
        { data: [45, 67, 800, 500], label: 'Account C' }
      ]
    },
    'Another Action': {
      type: 'bar',
      data: [
        { data: [430, 700, 360, 800], label: 'Account D' },
        { data: [220, 555, 200, 440], label: 'Account E' },
        { data: [55, 77, 900, 600], label: 'Account F' }
      ]
    },
    'Something else is here': {
      type: 'radar',
      data: [
        { data: [530, 800, 460, 900], label: 'Account G' },
        { data: [320, 655, 300, 540], label: 'Account H' },
        { data: [65, 87, 1000, 700], label: 'Account I' }
      ]
    }
  };
  public chartData = this.chartDataMap[this.selectedTitle]?.data;
  public chartLabels = ['January', 'February', 'March', 'April'];
  public chartOptions = { responsive: true };

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.updateChartType(this.selectedTitle);
  }

  onDropdownItemClick(title: ChartKey) {
    this.selectedTitle = title;
    this.updateChartType(title);
  }

  updateChartType(title: ChartKey) {
    const newChartType = this.chartDataMap[title]?.type;
    if (newChartType) {
      this.chartType = newChartType;
    }
  }
}

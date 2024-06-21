import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import * as d3 from 'd3';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit,  OnDestroy {

  @Input() data: { [key: string]: number } = { a: 9, b: 20, c: 30, d: 8 };
  @Input() colors: string[] = ['#4F95FF', '#FD3131', '#86BD2D', '#58508d'];

  private svg: any;
  private width: number = 0;
  private height: number = 0;
  private radius: number = 1;
  private pieData: any[] = [];
  private routeSub: Subscription | undefined;

  constructor(private elRef: ElementRef, private route: ActivatedRoute, private foodService: FoodService) {
    console.log("hola");
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const id = params['id'];
      console.log("Route param id:", id);
      this.refreshData(id);
    });
  }


  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateChart();
  }

  private setDimensions(): void {
    const container = this.elRef.nativeElement.querySelector('.donut-chart');
    this.width = container.offsetWidth;
    this.height = container.offsetHeight;
    this.radius = Math.min(this.width, this.height) / 2;
    console.log(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select(this.elRef.nativeElement).select("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .append("g")
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`);
  }

  private createPieData(): void {
    this.pieData = Object.entries(this.data).map(([key, value]) => ({ key, value }));
  }

  private drawChart(): void {
    const arc = d3.arc()
      .innerRadius(this.radius * 0.5)
      .outerRadius(this.radius);

    const pie = d3.pie()
      .value((d: any) => d.value)
      .sort(null);

    const arcs = this.svg.selectAll('.arc')
      .data(pie(this.pieData))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: number) => this.colors[i % this.colors.length]);
  }

  private updateChart(): void {
    this.setDimensions();

    this.svg
      .attr("viewBox", `0 0 ${this.width} ${this.height}`);

    const arc = d3.arc()
      .innerRadius(this.radius * 0.5)
      .outerRadius(this.radius);

    this.createPieData();

    const pie = d3.pie()
      .value((d: any) => d.value)
      .sort(null);

    const arcs = this.svg.selectAll('.arc')
      .data(pie(this.pieData));

    arcs.enter().append('g')
      .attr('class', 'arc')
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: number) => this.colors[i % this.colors.length]);

    arcs.select('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: number) => this.colors[i % this.colors.length]);

    arcs.exit().remove();
  }

  private refreshData(id: string): void {
  
    console.log("Refreshing data for id:", id, this.data);
    let temp = this.foodService.getFoodById(Number(id))
    this.data = {
      carbs : temp?.carbs!,
      fat : temp?.fat!,
      protein : temp?.protein!,
    }

    this.setDimensions();
    this.createSvg();
    this.createPieData();
    this.drawChart();
  }
}
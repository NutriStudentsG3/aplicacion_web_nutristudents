import { Component, OnInit , ElementRef, AfterViewInit, HostListener, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.css'
})
export class DonutChartComponent implements OnInit, AfterViewInit{

  @Input() data: { [key: string]: number } = {a: 9, b: 20, c:30, d:8};
  @Input() colors: string[] = ['#4F95FF', '#FD3131', '#86BD2D', '#58508d'];

  private svg: any;
  private margin = 20;
  private width: number =0;
  private height: number =0;
  private radius: number = 1;
  private pieData: any[] = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.setDimensions();
    this.createSvg();
    this.createPieData();
    this.drawChart();
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
    console.log(this.width, this.height)
  }

  private createSvg(): void {
    this.svg = d3.select(this.elRef.nativeElement).select("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      .append("g")
      .attr("transform", `translate(${this.width / 2}, ${this.height / 2})`); // Center the SVG
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

    // Update SVG dimensions and viewBox
    this.svg
      .attr("viewBox", `0 0 ${this.width} ${this.height}`);

    // Update arc generator
    const arc = d3.arc()
      .innerRadius(this.radius * 0.5)
      .outerRadius(this.radius);

    // Update pie data
    this.createPieData();

    // Update pie function
    const pie = d3.pie()
      .value((d: any) => d.value)
      .sort(null);

    // Update arcs
    const arcs = this.svg.selectAll('.arc')
      .data(pie(this.pieData));

    // Enter new arcs
    arcs.enter().append('g')
      .attr('class', 'arc')
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: number) => this.colors[i % this.colors.length]);

    // Update existing arcs
    arcs.select('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: number) => this.colors[i % this.colors.length]);

    // Remove old arcs
    arcs.exit().remove();
  }
}
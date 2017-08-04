import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import * as d3 from 'd3';
import DateHelper from '../../../helper/date.helper';
import FormatHelper from '../../../helper/format.helper';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements AfterViewInit, OnChanges {
  @Input() data: Array<any>;
  @Input() option: any;

  private graphData: Array<any>;

  private margin: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScaleWeight: any;
  private yScaleFat: any;
  private weightLine: any;
  private fatLine: any;
  private muscleLine: any;
  private svg: any;
  private g: any;
  private valueTip: any;
  private toolTip: any;
  private legend: any;
  private focus: any;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.margin = { top: 20, right: 40, bottom: 60, left: 50 };
    this.width = this.elementRef.nativeElement.offsetWidth - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;

    this.xScale = d3.scaleTime().range([0, this.width]);
    this.yScaleWeight = d3.scaleLinear().range([this.height, 0]);
    this.yScaleFat = d3.scaleLinear().range([this.height, 0]);

    this.weightLine = d3.line()
      .x((d) => this.xScale(d.date))
      .y((d) => this.yScaleWeight(d.weight));
    this.fatLine = d3.line()
      .x((d) => this.xScale(d.date))
      .y((d) => this.yScaleFat(d.fat));
    this.muscleLine = d3.line()
      .x((d) => this.xScale(d.date))
      .y((d) => this.yScaleFat(d.muscle));

    this.svg = d3.select(this.elementRef.nativeElement)
      .select('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom);

    this.g = this.svg.append('g')
      .attr('class', 'graph')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    this.valueTip = this.svg.append('g')
      .attr('class', 'valueTip')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    this.toolTip = this.svg.append('g')
      .attr('class', 'toolTip')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    this.legend = this.svg.append('g')
      .attr('class', 'legend')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom);

    this.focus = this.toolTip
      .append('g')
      .attr('class', 'focus')
      .style('display', 'none')
  }

  ngOnChanges() {
    if ( FormatHelper.isEmpty(this.data) ) {
      return;
    }

    this.graphData = this.data.map((d) => {
      return {
        date: DateHelper.removeTime(d.date).getTime(),
        weight: +d.weight,
        fat: +d.fat,
        muscle: +d.muscle
      };
    });

    this.xScale.domain(d3.extent(this.graphData, (d) => d.date));
    this.yScaleWeight.domain([d3.min(this.graphData, (d) => Math.min(d.weight)) - 2, d3.max(this.graphData, (d) => Math.max(d.weight)) + 2]);
    this.yScaleFat.domain([d3.min(this.graphData, (d) => Math.min(d.fat, d.muscle)) - 2, d3.max(this.graphData, (d) => Math.max(d.fat, d.muscle)) + 2]);

    this.drawAxis();
    this.drawLabels();
    this.drawLine();
    this.drawValueTip();
    this.drawLegend();
    this.drawToolTip();

  }

  private drawAxis() {
    // x Axis
    this.g.append('g')
      .attr('class', 'axisDate')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(this.xScale)
        .tickFormat(d3.timeFormat('%m-%d')));


    // y Axis (weight)
    this.g.append('g')
      .attr('class', 'axisWeight')
      .call(d3.axisLeft(this.yScaleWeight));

    // y Axis (fat, muscle)
    this.g.append('g')
      .attr('class', 'axisFat')
      .attr('transform', `translate(${this.width}, 0)`)
      .call(d3.axisRight(this.yScaleFat));
  }

  private drawLabels() {
    // x label
    this.g.append('text')
      .attr('transform', `translate(${this.width + 20}, ${this.height})`)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '10px')
      .attr('fill', 'red')
      .text('Date');

    // y label (weight)
    this.g.append('text')
      .attr('transform', 'translate(0, -20)')
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '10px')
      .attr('fill', 'red')
      .text('Weight [kg]');

    // y label (fat/muscle)
    this.g.append('text')
      .attr('transform', `translate(${this.width}, -20)`)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '10px')
      .attr('fill', 'red')
      .text('Fat/Muscle [%]')
  }

  private drawLine() {
    // weight line
    this.g.append('path')
      .attr('class', 'lineWeight')
      .attr('id', 'lineWeight')
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('d', this.weightLine(this.graphData));

    // fat line
    this.g.append('path')
      .attr('class', 'lineFat')
      .attr('id', 'lineFat')
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 1)
      .attr('d', this.fatLine(this.graphData));

    // muscle line
    this.g.append('path')
      .attr('class', 'lineMuscle')
      .attr('id', 'lineMuscle')
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 1)
      .attr('d', this.muscleLine(this.graphData));
  }

  private drawValueTip() {
    // max
    this.valueTip.selectAll('g.maxValue')
      .data(this.graphData)
      .enter()
      .filter((d) => d.weight === d3.max(this.graphData, (d) => d.weight))
      .filter((d, i, list) => i === list.length - 1)
      .append('g')
      .attr('class', 'maxValue')
      .attr('transform', (d) => `translate(${this.xScale(d.date)}, ${this.yScaleWeight(d.weight)})`)
      .append('text')
      .attr('y', -5)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .text((d) => `${d.weight} kg`);
    this.valueTip.select('.maxValue')
      .append('circle')
      .attr('r', 25)
      .attr('cy', -5)
      .attr('opacity', 0.2)
      .attr('fill', 'lightgray');

    // min
    this.valueTip.selectAll('g.minValue')
      .data(this.graphData)
      .enter()
      .filter((d) => d.weight === d3.min(this.graphData, (d) => d.weight))
      .filter((d, i, list) => i === list.length - 1)
      .append('g')
      .attr('class', 'minValue')
      .attr('transform', (d) => `translate(${this.xScale(d.date)}, ${this.yScaleWeight(d.weight)})`)
      .append('text')
      .attr('y', 10)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .text((d) => `${d.weight} kg`);
    this.valueTip.select('.minValue')
      .append('circle')
      .attr('r', 25)
      .attr('cy', 10)
      .attr('opacity', 0.2)
      .attr('fill', 'lightgray');
  }

  private drawLegend() {
    this.legend.append('text')
      .attr('x', (this.width + this.margin.left + this.margin.right) / 4)
      .attr('y', this.height + this.margin.top + 40)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .on('click', () => {

      })
      .text('Weight');

    this.legend.append('text')
      .attr('x', (this.width + this.margin.left + this.margin.right) / 2)
      .attr('y', this.height + this.margin.top + 40)
      .attr('fill', 'red')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .on('click', () => {

      })
      .text('Fat');

    this.legend.append('text')
      .attr('x', (this.width + this.margin.left + this.margin.right) / 4 * 3)
      .attr('y', this.height + this.margin.top + 40)
      .attr('fill', 'blue')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .on('click', () => {

      })
      .text('Muscle');
  }

  private drawToolTip() {
    this.focus.append('circle')
      .attr('r', 3)
      .attr('fill', 'black')
    this.focus.append('rect')
      .attr('width', 60)
      .attr('height', 20)
      .attr('x', -30)
      .attr('y', -30)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('fill', 'black')
    this.focus.append('text')
      .attr('y', -15)
      .attr('dy', '-0.1em')
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '10px')
    this.focus.append('polygon')
      .attr('points', '-5 -11, 5, -11, 0, -4')
      .attr('fill', 'black');

    this.toolTip.append('rect')
      .attr('class', 'toolTip-overlay')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('click', this.onClickPoint.bind(this))
      .on('mouseout', () => {
        this.focus.style('display', 'none')
      });
  }

  private onClickPoint() {
    // const x0 = xScale.invert(d3.mouse(this)[0]);
    const bisectDate = d3.bisector((d) => d.date).left;
    const x0 = this.xScale.invert(d3.event.pageX).getTime();

    const i = bisectDate(this.graphData, x0);

    const d0 = this.graphData[i - 1];
    const d1 = this.graphData[i];

    console.log(x0, i, d0, d1);
    let d;
    if ( d1 ) {
      d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    } else {
      d = d0;
    }
    this.focus.attr('transform', `translate(${this.xScale(d.date)}, ${this.yScaleWeight(d.weight)})`);
    this.focus.select('text').text(`${d.weight}kg`);
    this.focus.style('display', null);
  }

}

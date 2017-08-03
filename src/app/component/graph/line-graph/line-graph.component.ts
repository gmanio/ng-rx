import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnChanges {
  @Input() data: Array<any>;
  @Input() option: any;

  private example = [
    {
      "date": 1501722007704,
      "weight": 75.5,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1501635602000,
      "weight": 75.3,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1501549202000,
      "weight": 75.4,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1501462802000,
      "weight": 74.8,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1501376402000,
      "weight": 74.9,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1501290002000,
      "weight": 74.5,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1501203602000,
      "weight": 74.7,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1501117645000,
      "weight": 75.0,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1501031245000,
      "weight": 75.3,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500944845000,
      "weight": 75.3,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500858445000,
      "weight": 75.6,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500772045000,
      "weight": 75.7,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500685645000,
      "weight": 76.0,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500599245000,
      "weight": 75.8,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500512845000,
      "weight": 76.3,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500426445000,
      "weight": 76.8,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500340045000,
      "weight": 76.9,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500253645000,
      "weight": 76.8,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500167245000,
      "weight": 76.5,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1500080845000,
      "weight": 76.9,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499994445000,
      "weight": 77.1,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499908045000,
      "weight": 77.0,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499821645000,
      "weight": 77.2,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499735245000,
      "weight": 77.4,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499648845000,
      "weight": 77.3,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499562445000,
      "weight": 77.5,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499476045000,
      "weight": 77.4,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499389645000,
      "weight": 77.6,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499303245000,
      "weight": 77.5,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499216845000,
      "weight": 77.6,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499130445000,
      "weight": 77.9,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1499044045000,
      "weight": 77.6,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1498957645000,
      "weight": 77.8,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1498871245000,
      "weight": 77.9,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1498784845000,
      "weight": 77.6,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1498698445000,
      "weight": 77.7,
      "fat": 14.2,
      "muscle": 35.4
    },
    {
      "date": 1498612045000,
      "weight": 77.6,
      "fat": 14.2,
      "muscle": 35.4
    }
  ];

  constructor(private elementRef: ElementRef) {

  }

  ngAfterViewInit() {
    const margin = { top: 20, right: 40, bottom: 60, left: 50 };
    const width = this.elementRef.nativeElement.offsetWidth - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const xScale = d3.scaleTime().range([0, width]);
    const yScaleWeight = d3.scaleLinear().range([height, 0]);
    const yScaleFat = d3.scaleLinear().range([height, 0]);

    const weightLine = d3.line()
      .x((d) => xScale(d.date))
      .y((d) => yScaleWeight(d.weight));
    const fatLine = d3.line()
      .x((d) => xScale(d.date))
      .y((d) => yScaleFat(d.fat));
    const muscleLine = d3.line()
      .x((d) => xScale(d.date))
      .y((d) => yScaleFat(d.muscle));

    const svg = d3.select(this.elementRef.nativeElement)
      .select('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const g = svg.append('g')
      .attr('class', 'graph')
      .attr('width', width)
      .attr('height', height)
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const valueTip = svg.append('g')
      .attr('class', 'valueTip')
      .attr('width', width)
      .attr('height', height)
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const toolTip = svg.append('g')
      .attr('class', 'toolTip')
      .attr('width', width)
      .attr('height', height)
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const legend = svg.append('g')
      .attr('class', 'legend')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    this.example.forEach((d) => {
      // d.date = parseTime(new Date(d.date));
      d.weight = +d.weight;
      d.fat = +d.fat;
      d.muscle = +d.muscle;
    });

    xScale.domain(d3.extent(this.example, (d) => d.date));
    yScaleWeight.domain([d3.min(this.example, (d) => Math.min(d.weight)) - 2, d3.max(this.example, (d) => Math.max(d.weight)) + 2]);
    yScaleFat.domain([d3.min(this.example, (d) => Math.min(d.fat, d.muscle)) - 2, d3.max(this.example, (d) => Math.max(d.fat, d.muscle)) + 2]);

    // x Axis
    g.append('g')
      .attr('class', 'axisDate')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale)
        .tickFormat(d3.timeFormat('%m-%d')));


    // y Axis (weight)
    g.append('g')
      .attr('class', 'axisWeight')
      .call(d3.axisLeft(yScaleWeight));

    // y Axis (fat, muscle)
    g.append('g')
      .attr('class', 'axisFat')
      .attr('transform', `translate(${width}, 0)`)
      .call(d3.axisRight(yScaleFat));

    // x label
    g.append('text')
      .attr('transform', `translate(${width + 20}, ${height})`)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '10px')
      .attr('fill', 'red')
      .text('Date');

    // y label (weight)
    g.append('text')
      .attr('transform', 'translate(0, -20)')
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '10px')
      .attr('fill', 'red')
      .text('Weight [kg]');

    // y label (fat/muscle)
    g.append('text')
      .attr('transform', `translate(${width}, -20)`)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '10px')
      .attr('fill', 'red')
      .text('Fat/Muscle [%]')


    // weight line
    g.append('path')
      .attr('class', 'lineWeight')
      .attr('id', 'lineWeight')
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('d', weightLine(this.example));

    // fat line
    g.append('path')
      .attr('class', 'lineFat')
      .attr('id', 'lineFat')
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 1)
      .attr('d', fatLine(this.example));

    // muscle line
    g.append('path')
      .attr('class', 'lineMuscle')
      .attr('id', 'lineMuscle')
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 1)
      .attr('d', muscleLine(this.example));

    // max
    valueTip.selectAll('g.maxValue')
      .data(this.example)
      .enter()
      .filter((d) => d.weight === d3.max(this.example, (d) => d.weight))
      .filter((d, i, list) => i === list.length - 1)
      .append('g')
      .attr('class', 'maxValue')
      .attr('transform', (d) => `translate(${xScale(d.date)}, ${yScaleWeight(d.weight)})`)
      .append('text')
      .attr('y', -5)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .text((d) => `${d.weight} kg`);
    valueTip.select('.maxValue')
      .append('circle')
      .attr('r', 25)
      .attr('cy', -5)
      .attr('opacity', 0.2)
      .attr('fill', 'lightgray');

    // min
    valueTip.selectAll('g.minValue')
      .data(this.example)
      .enter()
      .filter((d) => d.weight === d3.min(this.example, (d) => d.weight))
      .filter((d, i, list) => i === list.length - 1)
      .append('g')
      .attr('class', 'minValue')
      .attr('transform', (d) => `translate(${xScale(d.date)}, ${yScaleWeight(d.weight)})`)
      .append('text')
      .attr('y', 10)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .text((d) => `${d.weight} kg`);
    valueTip.select('.minValue')
      .append('circle')
      .attr('r', 25)
      .attr('cy', 10)
      .attr('opacity', 0.2)
      .attr('fill', 'lightgray');

    legend.append('text')
      .attr('x', (width + margin.left + margin.right) / 4)
      .attr('y', height + margin.top + 40)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .on('click', () => {

      })
      .text('Weight');

    legend.append('text')
      .attr('x', (width + margin.left + margin.right) / 2)
      .attr('y', height + margin.top + 40)
      .attr('fill', 'red')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .on('click', () => {

      })
      .text('Fat');

    legend.append('text')
      .attr('x', (width + margin.left + margin.right) / 4 * 3)
      .attr('y', height + margin.top + 40)
      .attr('fill', 'blue')
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .on('click', () => {

      })
      .text('Muscle');

    const focus = toolTip
      .append('g')
      .attr('class', 'focus')
      .style('display', 'none')

    focus.append('circle')
      .attr('r', 3)
      .attr('fill', 'black')
    focus.append('rect')
      .attr('width', 60)
      .attr('height', 20)
      .attr('x', -30)
      .attr('y', -30)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('fill', 'black')
    focus.append('text')
      .attr('y', -15)
      .attr('dy', '-0.1em')
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '10px')
    focus.append('polygon')
      .attr('points', '-5 -11, 5, -11, 0, -4')
      .attr('fill', 'black');

    toolTip.append('rect')
      .attr('class', 'toolTip-overlay')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .on('click', onClickPoint.bind(this))
      .on('mouseout', () => {
        focus.style('display', 'none')
      });

    const bisectDate = d3.bisector((d) => d.date).left;

    function onClickPoint(event) {
      // const x0 = xScale.invert(d3.mouse(this)[0]);
      const x0 = xScale.invert(d3.event.pageX).getTime();

      const i = bisectDate(this.example, x0);

      const d0 = this.example[i - 1];
      const d1 = this.example[i];

      console.log(x0, i, d0, d1);
      let d;
      if ( d1 ) {
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
      } else {
        d = d0;
      }
      focus.attr('transform', `translate(${xScale(d.date)}, ${yScaleWeight(d.weight)})`);
      focus.select('text').text(`${d.weight}kg`);
      focus.style('display', null);
    }

  }

  ngOnChanges() {

  }

}

// import _ from 'lodash';
import * as d3 from 'd3';
import $ from 'jquery';

import './style.scss';
import users from './mod';

const data = [{ name: 'iPhone 6', price: 64, company: 'Apple' },
  { name: 'Samsung Galaxy Tab 4', price: 28, company: 'Samsung' },
  { name: 'iPhone 5s', price: 49, company: 'Apple' },
  { name: 'Samsung Galaxy S5', price: 48, company: 'Samsung' },
  { name: 'iPad Air', price: 37, company: 'Apple' },
  { name: 'Samsung Galaxy Note', price: 36, company: 'Samsung' }];


class RenderSVG {
  constructor(data) {
    this.data = data;
    this.bodyTag = $('body');
    console.log(users);
  }

  render() {
    const svg = d3.select('#root').append('svg')
      .attr('width', 800)
      .attr('height', 500);
    svg.append('circle')
      .attr('cx', 100)
      .attr('cy', 100)
      .attr('r', 50)
      .style('fill', 'red')
      .style('stroke', 'blue')
      .style('stroke-width', 3);

    svg.data(this.data)
      .exit()
      .remove();
  }
}

const swg = new RenderSVG(data).render();


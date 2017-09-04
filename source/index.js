/**
 * Created by lexic on 05.08.2017.
 */
import _ from "lodash";
import * as d3 from "d3";
import $ from "jquery";


/*
var data = _.map(_.range(10), function (i) {
    return Math.floor(Math.random() * 500);
});

var w = 1000, h = 500;

var app = d3.select('.d3-div');
var svg = app.append('svg')
    .attr('class', 'd3-svg')
    .attr('width', w)
    .attr('height', h);

var bar = svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', function (d, i) {
        return i * 22;
    })
    .attr('y', function (d, i) {
        return h - d;
    })
    .attr('width', 20)
    .attr('height', function (d, i) {
        return d;
    })
    .style('fill', 'blue');
*/

var phones = [ {name: 'iPhone 6', price: 64, company: 'Apple'},
    {name: 'Samsung Galaxy Tab 4', price: 28, company:'Samsung'},
    {name: 'iPhone 5s', price: 49, company: 'Apple'},
    {name: 'Samsung Galaxy S5', price: 48, company:'Samsung'},
    {name: 'iPad Air', price: 37, company: 'Apple'},
    {name: 'Samsung Galaxy Note', price: 36, company:'Samsung'}];

function showGraph(phones, company){
    $('.diagram').append('<select id="select" onchange="select()">'+
                            '<option>All</option>'+
                            '<option>Apple</option>'+
                            '<option>Samsung</option>'+
                        '</select><br /><br />'+
                        '<div class="diagram"></div>');

    d3.select('div.diagram')
        .selectAll('div.item')
        .data(phones)
        .enter()
        .append('div')
        .attr('class', 'item')
        .append('span');

    d3.select('div.diagram')
        .selectAll('div.item')
        .data(phones)
        .attr("class", "item")
        .style('width', function (d) {
            return (d.price * 6) + 'px';
        })
        .select('span')
        .text(function (d) {
            return d.name;
        });

    d3.select('div.diagram')
        .selectAll('div.item')
        .data(phones)
        .exit()
        .remove();

    d3.select("div.diagram")
        .selectAll("div.item")
        .filter(function (d, i) {
            console.log(company && company);
            if(company && company !== 'All')
                return !(d.company == company);
            else
                return false;
        })
        .classed("unselected", true);
}

function select() {
    var company = document.getElementById("select").value;
    showGraph(phones, company);
}

showGraph(phones);


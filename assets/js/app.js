var width = parseInt(d3.select('#scatter')
    .style("width"));

var margin = 10;
var padding = 45;
var labelArea = 110;
var height = width * 2/3;

var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "chart");

svg.append("g").attr("class", "xText");
var xText = d3.select(".xText");

var Y_bottom_text = height - margin - padding;
var X_bottom_text =  (width - labelArea)/2 + labelArea;

xText.attr("transform",`translate(
    ${X_bottom_text}, 
    ${Y_bottom_text})`
    );

xText.append("text")
    .attr("y", -20)
    .attr("data-name", "age")
    .attr("data-axis", "x")
    .attr("class","aText active x")
    .text("Age (Median)");

xText.append("text")
    .attr("y", 0)
    .attr("data-name", "poverty")
    .attr("data-axis", "x")
    .attr("class","aText inactive x")
    .text("In Poverty (%)");

xText.append("text")
    .attr("y", 20)
    .attr("data-name", "income")
    .attr("data-axis", "x")
    .attr("class","aText inactive x")
    .text("Income (Median)");

// y-axis 
svg.append("g").attr("class", "yText");
var yText = d3.select(".yText");

var X_left_text =  margin + padding;
var Y_left_text = (height + labelArea) / 2 - labelArea;
yText.attr("transform",`translate(
    ${X_left_text}, 
    ${Y_left_text}
    )rotate(-90)`
    );

yText .append("text")
    .attr("y", -22)
    .attr("data-name", "obesity")
    .attr("data-axis", "y")
    .attr("class", "aText active y")
    .text("Obesity (%)");

yText .append("text")
    .attr("y", 0)
    .attr("data-name", "smokes")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Smokes (%)");

yText .append("text")
    .attr("y", 22)
    .attr("data-name", "healthcare")
    .attr("data-axis", "y")
    .attr("class", "aText inactive y")
    .text("Lacks Healthcare (%)");
    
var radius_of_circle;
function adjustRadius() {
  if (width <= 550) {
    radius_of_circle = 8;}
  else { 
    radius_of_circle = 11;}
}
adjustRadius();

d3.csv("assets/data/data.csv").then(function(csv_data) {
    showPlot(csv_data);
});




















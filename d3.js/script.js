var data = [
  { name: "A", value: 20 },
  { name: "B", value: 50 },
  { name: "C", value: 30 },
  { name: "D", value: 40 }
];

var margin = { top: 20, right: 20, bottom: 30, left: 40 },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var x = d3
  .scaleBand()
  .range([0, width])
  .padding(0.1)
  .domain(data.map(function (d) {
    return d.name;
  }));

var y = d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, function (d) {
  return d.value;
})]);

var xAxis = d3.axisBottom(x);

var yAxis = d3.axisLeft(y);

var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

svg
  .append("g")
  .attr("class", "y-axis")
  .call(yAxis)
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.71em")
  .attr("text-anchor", "end")
  .text("Value");

svg
  .selectAll(".bar")
  .data(data)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", function (d) {
    return x(d.name);
  })
  .attr("width", x.bandwidth())
  .attr("y", function (d) {
    return y(d.value);
  })
  .attr("height", function (d) {
    return height - y(d.value);
  });

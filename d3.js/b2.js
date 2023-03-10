// Define the size of the SVG element
var width = 600;
var height = 400;

// Define the data for the bubbles
var data = [
  {x: 100, y: 100, r: 20},
  {x: 200, y: 200, r: 30},
  {x: 300, y: 300, r: 40},
  {x: 400, y: 400, r: 50},
  {x: 500, y: 500, r: 60},
];

// Create the SVG element
var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Define the simulation
var simulation = d3.forceSimulation()
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("charge", d3.forceManyBody().strength(-30))
  .force("link", d3.forceLink().distance(100).strength(1));

// Define the links between the bubbles
var links = [];
for (var i = 0; i < data.length - 1; i++) {
  for (var j = i + 1; j < data.length; j++) {
    links.push({source: i, target: j});
  }
}

// Create the bubbles
var bubbles = svg.selectAll(".bubble")
  .data(data)
  .enter()
  .append("circle")
  .attr("class", "bubble")
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("r", function(d) { return d.r; })
  .style("fill", "blue")
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

// Update the simulation
simulation
  .nodes(data)
  .on("tick", ticked);

simulation.force("link")
  .links(links);

// Define the functions for the drag behavior
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// Define the tick function for the simulation
function ticked() {
  bubbles
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });

  links.forEach(function(d) {
    var dx = d.target.x - d.source.x;
    var dy = d.target.y - d.source.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var springLength = 100;

    var springForce = 0.1 * (distance - springLength);
    var fx = springForce * dx / distance;
    var fy = springForce * dy / distance;
    d.source.x += fx;
    d.source.y += fy;
    d.target.x -= fx;
    d.target.y -= fy;
  });
}

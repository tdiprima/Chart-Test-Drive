// set up the SVG container
var svg = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

// set up the simulation
var simulation = d3.forceSimulation()
  .force("center", d3.forceCenter(250, 250))
  .force("charge", d3.forceManyBody().strength(-10))
  .force("collision", d3.forceCollide().radius(20))
  .force("link", d3.forceLink().id(function(d) { return d.id; }));

// define the data
var data = {
  nodes: [
    { id: "A" },
    { id: "B" },
    { id: "C" },
    { id: "D" }
  ],
  links: [
    { source: "A", target: "B" },
    { source: "B", target: "C" },
    { source: "C", target: "D" }
  ]
};

// create the links
var links = svg.selectAll(".link")
  .data(data.links)
  .enter().append("line")
  .attr("class", "link");

// create the nodes
var nodes = svg.selectAll(".node")
  .data(data.nodes)
  .enter().append("circle")
  .attr("class", "node")
  .attr("r", 20);

// define the tick function
function tick() {
  links
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

  nodes
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
}

// set up the simulation
simulation
  .nodes(data.nodes)
  .on("tick", tick);

// set up the links
simulation
  .force("link")
  .links(data.links);

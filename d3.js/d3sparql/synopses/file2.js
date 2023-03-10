// Convert sparql-results+json object into a JSON graph in the {"nodes": [], "links": []} form.
//   Suitable for d3.layout.force(), d3.layout.sankey() etc.

// Options:
let config = {
  key1: 'node1', // SPARQL variable name for node1 (optional; default is the 1st variable)
  key2: 'node2', // SPARQL variable name for node2 (optional; default is the 2nd variable)
  label1: 'node1label', // SPARQL variable name for the label of node1 (optional; default is the 3rd variable)
  label2: 'node2label', // SPARQL variable name for the label of node2 (optional; default is the 4th variable)
  value1: 'node1value', // SPARQL variable name for the value of node1 (optional; default is the 5th variable)
  value2: 'node2value' // SPARQL variable name for the value of node2 (optional; default is the 6th variable)
}

// Synopsis:
d3sparql.query(endpoint, sparql, render)

function render (json) {
  let config = {
    // ...
  }
  d3sparql.forcegraph(json, config)
  d3sparql.sankey(json, config)
}

// TODO:
//   Should follow the convention in the miserables.json https://gist.github.com/mbostock/4062045 to contain group for nodes and value for edges.

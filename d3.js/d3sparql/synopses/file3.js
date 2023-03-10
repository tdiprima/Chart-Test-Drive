// Convert sparql-results+json object into a JSON tree of
// { "name": name, "value": size, "children": [] }
// format like in the flare.json file.

// Suitable for d3.layout.hierarchy() family
// * cluster:    d3sparql.dendrogram()
// * pack:       d3sparql.circlepack()
// * partition:  d3sparql.sunburst()
// * tree:       d3sparql.roundtree()
// * treemap:    d3sparql.treemap(), d3sparql.treemapzoom()

// Options:
config = {
  root: 'root_name', // SPARQL variable name for root node (optional; default is the 1st variable)
  parent: 'parent_name', // SPARQL variable name for parent node (optional; default is the 2nd variable)
  child: 'child_name', // SPARQL variable name for child node (optional; default is the 3rd variable)
  value: 'value_name' // SPARQL variable name for numerical value of the child node (optional; default is the 4th variable or "value")
}

// Synopsis:
d3sparql.sparql(endpoint, sparql, render)

function render (json) {
  let config = {
    // ...
  }
  d3sparql.roundtree(json, config)
  d3sparql.dendrogram(json, config)
  d3sparql.sunburst(json, config)
  d3sparql.treemap(json, config)
  d3sparql.treemapzoom(json, config)
}

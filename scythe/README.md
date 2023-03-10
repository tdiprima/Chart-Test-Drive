# Scythe JS

## A data display and plotting library

[GitHub Repo](https://github.com/jbalsamo/scythe)

Using the dc.js plotting framework this project sets about to use retrieved data that holds both the graph options and the data to graph to present a meaningful dashboard.  Initially we started with a select group of graph types and data to show the capabilities.

# id=

```html
<div id="chart-line-hitsperday" class="dc-chart">
<clipPath id="chart-line-hitsperday-clip">
<div id="chart-ring-year" class="dc-chart">

<div id="chart-line-hitsperday2" class="dc-chart">
<clipPath id="chart-line-hitsperday2-clip">
<div id="chart-ring-year2" class="dc-chart">
```

# test.html scripts

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js"></script>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dc@4.2.7/dist/dc.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
<script src="./scythe.js"></script>
<script src="./test.js"></script>
<script src="./ogdcjs.js"></script>
```

# stylesheets

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/dc@4.2.7/dist/style/dc.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" rel="stylesheet">
<link href="main.css" rel="stylesheet">
```

## JavaScript

<!--Teach me how to make a plotly chart in JavaScript, in a way that's easy to understand, with a code example.-->

### JS Plotly chart creation

**Step 1:** Include the plotly library

To use plotly, you need to include the plotly.js library in your HTML file. You can download the library from the plotly website or use a CDN link. Here's an example of using a CDN link:

```html
<head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
</head>
```

**Step 2:** Set up your data

To create a plotly chart, you need to define your data as an array of objects. Each object represents a trace (i.e., a series of data points) in your chart.

Here's an example of setting up data for a scatter plot:

```javascript
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  mode: 'markers',
  type: 'scatter'
};

var data = [trace1];
```

In this example, `x` and `y` are arrays of data points, `mode` is set to `markers` to create a scatter plot, and `type` is set to `scatter` to indicate that this is a scatter plot trace.

**Step 3:** Set up your layout

Next, you need to define the layout of your chart. This includes things like the title, axis labels, and axis ranges. Here's an example of setting up a basic layout:

```javascript
var layout = {
  title: 'My Scatter Plot',
  xaxis: {
    title: 'X-axis label'
  },
  yaxis: {
    title: 'Y-axis label'
  }
};
```

In this example, `title` sets the title of the chart, and `xaxis` and `yaxis` set the labels for the x and y axes.

**Step 4:** Create the chart

Finally, you can create the chart by calling the `Plotly.newPlot` function and passing in your data and layout:

```javascript
Plotly.newPlot('myDiv', data, layout);
```

In this example, `myDiv` is the ID of a div element in your HTML file where you want to display the chart.

Complete example of creating a basic scatter plot using plotly:

<span style="color:#0000dd;font-size:larger;">scatter.html</span>


## Python

It's actually super-simple.

Create a simple scatter plot using Plotly:

**Step 1:** Install Plotly

First, you need to install Plotly using `pip`. Open your terminal or command prompt and type the following command:

```sh
pip install plotly
```

**Step 2:** Import Plotly

Next, import Plotly into your Python script using the following code:

```py
import plotly.graph_objects as go
```

This line of code imports the Plotly library and renames it to `go` for easier access.

**Step 3:** Prepare Your Data

In order to create a plot, you need some data to plot. For this example, we will create a simple scatter plot with random data. Here is the code to generate the data:

```py
import random

x_data = [random.randint(0, 100) for i in range(10)]
y_data = [random.randint(0, 100) for i in range(10)]
```

This code generates two lists of 10 random integers between 0 and 100. These lists will serve as the x-axis and y-axis data for our scatter plot.

**Step 4:** Create Your Plot

Now that you have your data, you can create your plot. Here is the code to create a scatter plot:

```py
fig = go.Figure(data=go.Scatter(x=x_data, y=y_data, mode='markers'))
fig.show()
```

This code creates a `Figure` object, which is the main container for all Plotly charts.

Inside the Figure object, we add a Scatter trace using the `go.Scatter()` function.

We pass in the x-axis and y-axis data using the x and y parameters, and set the mode parameter to 'markers' to display the data points as individual markers. Finally, we call the `show()` method on the `Figure` object to display the plot.

**Step 5:** Customize Your Plot (Optional)

If you want to customize your plot, you can add more traces, change the colors or markers, add titles and labels, and more. Here is an example of how to add a title and axis labels to the plot:

```py
fig = go.Figure(data=go.Scatter(x=x_data, y=y_data, mode='markers'))
fig.update_layout(title='Random
```

<span style="color:red;">It came, and it went!</span>

<span style="color:#0000dd;font-size:larger;">scatter.py</span>

<br>

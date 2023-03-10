# Charts

<!-- Charts, bc people are weird abt it. -->

Highcharts — 2009, written in pure JavaScript

Recharts — (2016?) — Re-designed charting library built with React and D3.

Chart.js — 2013

Nivo — 2016 — Supercharged React dataviz components, built on top of d3js.

d3 js — 2011

Fabric.js — 2010

What was that other thing, again?  Oh yeah.  **[plot.ly](http://plot.ly) — 2013**

I asked around here a while ago about how to create interactive visualizations in the browser. Someone pointed me to d3, which does look really nice.

However, since starting it and getting into the weeds, I'm kinda getting the feeling that it's not super widely used... if you look at the **google trends** for d3.js, it's been on a decline over the past 5 years. The d3js subreddit has like 3k subscribers. **The documentation seems sparse and a little all over the place.**

I'm just wondering if it's worth investing time, or there's something that's more widely used that can do the same stuff. I'm just starting with this, so I'd like to choose the best path. Any advice is appreciated, thanks!

[Is d3.js dying? Is there some better alternative I should check out?](https://www.reddit.com/r/learnjavascript/comments/blfwcf/is_d3js_dying_is_there_some_better_alternative_i/)

D3 is like cooking a curry from scratch, combining onions, garlic, spices and vegetables to create a unique dish while Chart.js is like using a ready-made sauce. Cooking from scratch will yield a better meal (if the chef knows what they're doing) but will require more time, effort and experience. **The ready-made sauce can yield a decent enough meal and certainly requires less time and effort.**

[D3 or Chart.js for Data Visualisation?](https://www.createwithdata.com/d3js-or-chartjs/)

When answering these questions, we have to understand the context in which D3 was created. D3 was first released in 2011, and it was quite innovative at the time.

D3 solved a lot of these problems, and it was no doubt the easiest approach to implementing visualisations at the time. However, a lot has changed since then. We have new modern frameworks that use more flexible and expressive concepts such as virtual DOM, and CSS has so many new capabilities for layout and animations.

[Why I no longer use D3.js](https://medium.com/@PepsRyuu/why-i-no-longer-use-d3-js-b8288f306c9a)

I have used highcharts and it is pretty awesome for my previous project. now as I am about to start my new project I want to use other charting libraries such as recharts, chart js, Nivo, d3 js...

[Fabric.js vs Chart.js](https://stackshare.io/stackups/fabricjs-vs-js-chart)

**Graphs with Fabric js!**

[ngraph.fabric](https://github.com/anvaka/ngraph.fabric)

**Mastering Basics** of each.

<hr>

Hey, AO.  You got me thinking about graphs.

Chart.js and Plotly were developed in 2013.  Ok, good.

(d3 was created in 2011, and it was the only game in town at the time).

Were you considering using d3.js and Highcharts or no?

Because Highcharts was developed in 2009.  And I think we'd be better off using something more current.  (Also according to Google trends, d3 is on the decline.)

Recharts and Nivo came out in 2016, and they're React and d3.  Not sure if we want to look into or not.

AO  11:08

[dc.js - Dimensional Charting library](https://dc-js.github.io/dc.js/)

ME  11:08

2011

AO  11:08

[Chart.js - Simple yet flexible charting library](https://www.chartjs.org/) still really good for basic charting

chartjs.orgchartjs.org

Chart.js | Open source HTML5 Charts for your website

Simple, clean and engaging HTML5 based JavaScript charts. 

Chart.js is an easy way to include animated, interactive graphs on your website for free.

dc.js has ability to look at large amount of data client side for interactive graphs

it uses crossfilter under the hood

ME  11:09

ok.  and chartjs is kinda better than d3 in a way, anyway.

AO  11:10

for basic charting, chartjs alot easier and works fine

no reason we cant mix and match when needed

i was going to create a wicket wrapper for what was needed.

i've looked around but focus is getting main engine and multiviewer online

ME  11:11

I wondered if anybody was using Fabric.js for graphs

and voila https://github.com/anvaka/ngraph.fabric

GitHubGitHub<br>
anvaka/ngraph.fabric<br>
Fabric.js graph renderer. Contribute to anvaka/ngraph.fabric development by creating an account on GitHub.

AO  11:11

i'm completely open to the charting at the moment.  best to have multiple candidates for discussion when the time comes

11:11

dc.js really interesting as it allows chart interaqcion between charts and is well documented

i want to wrap on first version of feature conversion and get them loaded into new system for use with multiviewer

charting after that

<br>

/**
 * @name scythe.js
 * @fileOverview Library to create graphs and tables from data retrieved from the server.
 * @author <a href="mailto:joseph.balsamo@stonybrook.edu">Joseph Balsamo</a>
 * @version 1.0
 * @created 2020-03-01
 */
class Scythe {
    d3Values = [];

    xfValues = [];

    graphs = [];

    tables = [];

    ndx = null;

    constructor(datasource, gids, tids) {
        this.d3 = datasource.d3;
        this.xfilter = datasource.xfilter;
        this.config = datasource.config;
        this.data = datasource.data;
        this.gids = gids;
        this.tids = tids;
        this.init();
    }

    print_filter(filter) {
        let f = eval(filter);
        if (typeof f.length !== 'undefined') {
        } else {
        }

        if (typeof f.top !== 'undefined') {
            f = f.top(Infinity);
        } else {
        }

        if (typeof f.dimension !== 'undefined') {
            f = f
                .dimension(d => {
                    return '';
                })
                .top(Infinity);
        } else {
        }

        // console.log(
        //     `${filter}(${f.length}) = ${JSON.stringify(f)
        //         .replace('[', '[\n\t')
        //         .replace(/}\,/g, '},\n\t')
        //         .replace(']', '\n]')}`,
        // );
    }

    init() {
        this.ndx = crossfilter(this.data);
        // Process d3 values
        this.d3.forEach(d => {
            if (d.type === 'parsedate') {
                const parseDate = d3.timeParse(d.format);
                this.data.forEach(e => {
                    e[d.fields[0]] = parseDate(e[d.fields[0]]);
                });
            }

            if (d.type === 'sum') {
                this.data.forEach(e => {
                    e[d.name] = 0;
                    d.fields.forEach(f => {
                        e[d.name] += e[f];
                    });
                });
            }

            if (d.type === 'getFullYear') {
                this.data.forEach(e => {
                    e[d.name] = e[d.fields[0]].getFullYear();
                });
            }
        });

        // Process xfilter values
        this.xfilter.forEach(d => {
            if (d.type === 'dimension') {
                this.xfValues[d.name] = this.ndx.dimension(e => e[d.dim_field]);
            }

            if (this.xfValues[d.name] !== undefined) {
                this.print_filter(this.xfValues[d.name]);
            }

            if (d.type === 'group') {
                if (d.group_method === 'reduceSum') {
                    if (d.field_function === 'return') {
                        this.xfValues[d.name] = this.xfValues[d.dimension].group().reduceSum(e => e[d.group_field]);
                    } else if (d.field_function === 'pluck') {
                        this.xfValues[d.name] = this.xfValues[d.dimension].group().reduceSum(dc.pluck(d.group_field));
                    }
                }
            }

            if (d.type === 'bottom') {
                this.xfValues[d.name] = this.xfValues[d.dimension].bottom(1)[0][d.field];
            }

            if (d.type === 'top') {
                this.xfValues[d.name] = this.xfValues[d.dimension].top(1)[0][d.field];
            }
        });

        // Process graphs
        this.config.forEach(conf => {
            // console.log(this.xfValues);
            if (conf.type === 'lineChart') {
                this.graphs[conf.id] = dc.lineChart(conf.dom_id);
                if (conf.width !== undefined) {
                    this.graphs[conf.id].width(conf.width);
                }

                if (conf.height !== undefined) {
                    this.graphs[conf.id].height(conf.height);
                }

                if (conf.dimension !== undefined) {
                    this.graphs[conf.id].dimension(conf.dimension);
                }

                if (conf.renderArea !== undefined) {
                    this.graphs[conf.id].renderArea(conf.renderArea);
                }

                if (conf.brushOn !== undefined) {
                    this.graphs[conf.id].brushOn(conf.brushOn);
                }

                if (conf.group !== undefined) {
                    this.graphs[conf.id].group(this.xfValues[conf.group.field], conf.group.label);
                }

                if (conf.stack !== undefined) {
                    conf.stack.forEach(s => {
                        this.graphs[conf.id].stack(this.xfValues[s.field], s.label);
                    });
                }

                if (conf.x !== undefined) {
                    if (conf.x.scale !== undefined) {
                        if (conf.x.scale.d3 !== undefined) {
                            this.graphs[conf.id].x(d3.scaleTime().domain([this.xfValues.minDate, this.xfValues.maxDate]));
                        }
                    }
                }

                if (conf.yAxisLabel !== undefined) {
                    this.graphs[conf.id].yAxisLabel(conf.yAxisLabel);
                }

                if (conf.xAxisLabel !== undefined) {
                    this.graphs[conf.id].xAxisLabel(conf.xAxisLabel);
                }

                if (conf.legend !== undefined) {
                    this.graphs[conf.id].legend(
                        dc
                            .legend()
                            .x(conf.legend.x)
                            .y(conf.legend.y)
                            .itemHeight(conf.legend.itemHeight)
                            .gap(conf.legend.gap),
                    );
                }
                this.graphs[conf.id].turnOnControls(true);
            }

            if (conf.type === 'pieChart') {
                this.graphs[conf.id] = dc.pieChart(conf.dom_id);
                if (conf.width !== undefined) {
                    this.graphs[conf.id].width(conf.width);
                }

                if (conf.height !== undefined) {
                    this.graphs[conf.id].height(conf.height);
                }

                if (conf.dimension !== undefined) {
                    this.graphs[conf.id].dimension(conf.dimension);
                }

                if (conf.group !== undefined) {
                    this.graphs[conf.id].group(this.xfValues[conf.group.field]);
                }

                if (conf.innerRadius !== undefined) {
                    this.graphs[conf.id].innerRadius(conf.innerRadius);
                }
            }

            this.graphs[conf.id].on('filtered.monitor', (chart, filter) => {
                console.log(filter);
            });

            this.graphs[conf.id].on('renderlet', chart => {
                chart.selectAll('rect').on('click', d => {
                    console.log('click!', d);
                });
            });

            // dc.registerChart(conf.dom_id.replace('#',''),"group1")
        });
        dc.renderAll();
        // console.log(this.xfValues);
    }

    return_data() {
        return this.data;
    }

    return_graphs() {
        return this.graphs;
    }

    return_xfValues() {
        return this.xfValues;
    }
}

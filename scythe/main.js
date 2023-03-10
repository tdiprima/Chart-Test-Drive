/**
 *  @name main.js
 *  @fileOverview Main file for the application. Includes helper and data retrieval functions
 *  @author <a href="mailto:joseph.balsamo@stonybrook.edu">Joseph Balsamo</a>
 *  @version 1.0
 *  @created 2022-03-01
 */
let datasource = [
    {
        d3: [
            {
                id: 1,
                name: 'date',
                type: 'parsedate',
                fields: ['date'],
            },
            {
                id: 2,
                name: 'yearTotal',
                type: 'sum',
                fields: ['http_404', 'http_200', 'http_302'],
            },
            {
                id: 3,
                name: 'year',
                type: 'getFullYear',
                fields: ['date'],
            }
        ],
        xfilter: [
            {
                id: 1,
                name: 'yearDim',
                type: 'dimension',
                dim_field: 'year',
            },
            {
                id: 2,
                name: 'yearTotal',
                type: 'group',
                dimension: 'yearDim',
                field_function: 'return',
            },
            {
                id: 3,
                name: 'dateDim',
                type: 'dimension',
                dim_field: 'date',
            },
            {
                id: 4,
                name: 'minDate',
                type: 'bottom',
                dimension: 'yearDim',
                field: 'date',
            },
            {
                id: 5,
                name: 'maxDate',
                type: 'top',
                dimension: 'yearDim',
                field: 'date',
            },
            {
                id: 6,
                name: 'hits',
                type: 'group',
                dimension: 'yearDim',
                group_method: 'reduceSum',
                field_function: 'pluck',
                group_field: 'total',
            },
            {
                id: 7,
                type: 'group',
                name: 'status_200',
                group_method: 'reduceSum',
                field_function: 'return',
                group_field: 'date',
            },
            {
                id: 8,
                type: 'group',
                name: 'status_302',
                group_method: 'reduceSum',
                field_function: 'return',
                group_field: 'date',
            },
            {
                id: 9,
                type: 'group',
                name: 'status_404',
                group_method: 'reduceSum',
                field_function: 'return',
                group_field: 'date',
            }
        ],
        config: [
            {
                id: 1,
                name: 'hitsLineChart',
                dom_id: '#chart-line-hitsperday',
                type: 'lineChart',
                width: 500,
                height: 300,
                renderArea: true,
                brushOn: true,
                dimension: 'dateDim',
                group: {
                    field: 'status_200',
                    label: '200',
                },
                stack: [
                    {
                        field: 'status_302',
                        label: '302',
                    },
                    {
                        field: 'status_404',
                        label: '404',
                    }
                ],
                x: {
                    scale: {
                        d3: [
                            {
                                id: 1,
                                name: 'xScale',
                                type: 'scaleTime',
                                function: 'domain',
                                min: 'minDate',
                                max: 'maxDate',
                            }
                        ]
                    }
                },
                yAxisLabel: 'Hits per day',
                legend: {
                    x: 50,
                    y: 10,
                    itemHeight: 13,
                    gap: 5,
                }
            },
            {
                id: 2,
                name: 'yearRingChart',
                dom_id: '#chart-ring-year',
                type: 'pieChart',
                width: 250,
                height: 250,
                dimension: 'yearDim',
                group: {
                    field: 'year_total',
                },
                innerRadius: 0,
            }
        ],
        data: [
            { date: '12/27/2012', http_404: 22, http_200: 190, http_302: 100 },
            { date: '12/28/2012', http_404: 2, http_200: 10, http_302: 100 },
            { date: '12/29/2012', http_404: 31, http_200: 300, http_302: 100 },
            { date: '12/30/2012', http_404: 2, http_200: 90, http_302: 0 },
            { date: '12/31/2012', http_404: 25, http_200: 90, http_302: 0 },
            { date: '01/01/2013', http_404: 2, http_200: 90, http_302: 0 },
            { date: '01/02/2013', http_404: 71, http_200: 10, http_302: 1 },
            { date: '01/03/2013', http_404: 12, http_200: 90, http_302: 0 },
            { date: '01/04/2013', http_404: 2, http_200: 90, http_302: 0 },
            { date: '01/05/2013', http_404: 2, http_200: 90, http_302: 0 },
            { date: '01/06/2013', http_404: 42, http_200: 200, http_302: 1 },
            { date: '01/07/2013', http_404: 1, http_200: 200, http_302: 100 }
        ]
    }
];

// let gids = ['chart-ring-year'];
let gids = ['chart-ring-year', 'chart-line-hitsperday'];
let tids = [];

let ds = [
    {
        d3: [
            {
                id: 1,
                name: 'date',
                type: 'parsedate',
                format: '%m/%d/%Y',
                fields: ['date'],
            },
            {
                id: 2,
                name: 'total',
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
                group_method: 'reduceSum',
                field_function: 'return',
                group_field: 'total',
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
                dimension: 'dateDim',
                field: 'date',
            },
            {
                id: 5,
                name: 'maxDate',
                type: 'top',
                dimension: 'dateDim',
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
                dimension: 'dateDim',
                group_method: 'reduceSum',
                field_function: 'return',
                group_field: 'http_200',
            },
            {
                id: 8,
                type: 'group',
                name: 'status_302',
                dimension: 'dateDim',
                group_method: 'reduceSum',
                field_function: 'return',
                group_field: 'http_302',
            },
            {
                id: 9,
                type: 'group',
                name: 'status_404',
                dimension: 'dateDim',
                group_method: 'reduceSum',
                field_function: 'return',
                group_field: 'http_404',
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
                xAxisLabel: 'Date',
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
                    field: 'yearTotal',
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
            { date: '01/07/2013', http_404: 1, http_200: 200, http_302: 100 },
        ]
    }
];

function print_filter(filter) {
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
    //         .replace(']', '\n]')}`
    // );
}

let mySc = new Scythe(ds[0], gids, tids);
// console.log("ds[0]", ds[0]);
// console.log("gids", gids);
// console.log("tids", tids);

/*
console.log('All Hits by Year: ');
print_filter(mySc.xfValues.hits);

console.log('Year Totals: ');
print_filter(mySc.xfValues.yearTotal);

console.log('200: ');
print_filter(mySc.xfValues.status_200);

console.log('302: ');
print_filter(mySc.xfValues.status_302);

console.log('404: ');
print_filter(mySc.xfValues.status_404);

console.log('date min: ');
print_filter(mySc.xfValues.minDate);

console.log('date max: ');
print_filter(mySc.xfValues.maxDate);

console.log(mySc.return_xfValues());
print_filter(mySc.xfValues.yearDim);
print_filter(mySc.xfValues.dateDim);
*/

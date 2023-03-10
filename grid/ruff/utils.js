// https://stackoverflow.com/questions/67210101/utils-package-in-chart-js
import colorLib from './node_modules/@kurkle/color';
import {DateTime} from './node_modules/luxon';
import 'chartjs-adapter-luxon'; // can't get it?
import {valueOrDefault} from '../../dist/helpers.esm';

// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
var Utils = function () {

}

var _seed = Date.now();

function srand(seed) {
  _seed = seed;
}

function rand(min, max) {
  min = valueOrDefault(min, 0);
  max = valueOrDefault(max, 0);
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}

Utils.numbers = function(config) {
  var cfg = config || {};
  var min = valueOrDefault(cfg.min, 0);
  var max = valueOrDefault(cfg.max, 100);
  var from = valueOrDefault(cfg.from, []);
  var count = valueOrDefault(cfg.count, 8);
  var decimals = valueOrDefault(cfg.decimals, 8);
  var continuity = valueOrDefault(cfg.continuity, 1);
  var dfactor = Math.pow(10, decimals) || 0;
  var data = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = (from[i] || 0) + this.rand(min, max);
    if (this.rand() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    } else {
      data.push(null);
    }
  }

  return data;
}

numbers = Utils.numbers

function points(config) {
  const xs = this.numbers(config);
  const ys = this.numbers(config);
  return xs.map((x, i) => ({x, y: ys[i]}));
}

function bubbles(config) {
  return this.points(config).map(pt => {
    pt.r = this.rand(config.rmin, config.rmax);
    return pt;
  });
}

function labels(config) {
  var cfg = config || {};
  var min = cfg.min || 0;
  var max = cfg.max || 100;
  var count = cfg.count || 8;
  var step = (max - min) / count;
  var decimals = cfg.decimals || 8;
  var dfactor = Math.pow(10, decimals) || 0;
  var prefix = cfg.prefix || '';
  var values = [];
  var i;

  for (i = min; i < max; i += step) {
    values.push(prefix + Math.round(dfactor * i) / dfactor);
  }

  return values;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

Utils.months = function (config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

months = Utils.months

const COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba'
];

function color(index) {
  return COLORS[index % COLORS.length];
}

Utils.transparentize = function(value, opacity) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}

transparentize = Utils.transparentize

Utils.CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

CHART_COLORS = Utils.CHART_COLORS

const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
];

function namedColor(index) {
  return NAMED_COLORS[index % NAMED_COLORS.length];
}

function newDate(days) {
  return DateTime.now().plus({days}).toJSDate();
}

function newDateString(days) {
  return DateTime.now().plus({days}).toISO();
}

function parseISODate(str) {
  return DateTime.fromISO(str);
}

import { color } from 'd3-color';

const darken = k => specifier =>
  color(specifier)
    .darker(k)
    .toString();
const darken1 = darken(0.18);
const darken2 = darken(0.32);
const darken3 = darken(0.6);

export default {
  darken,
  darken1,
  darken2,
  darken3,
};

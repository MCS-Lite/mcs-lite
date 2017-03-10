import R from 'ramda';

const areaChartTypeMapper = R.ifElse(
  R.contains(R.__, ['Switch', 'GPIO']), // eslint-disable-line
  R.always('step'),
  R.always('linear'),
);

export default areaChartTypeMapper;

// @flow
import R from 'ramda';

type Mapper = string => 'step' | 'linear';

const areaChartTypeMapper: Mapper = R.ifElse(
  R.contains(R.__, ['Switch', 'GPIO']), // eslint-disable-line
  R.always('step'),
  R.always('linear'),
);

export default areaChartTypeMapper;

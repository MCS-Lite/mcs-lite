/**
 * CustomContentOfTooltip
 * ref: http://recharts.org/#/en-US/examples/CustomContentOfTooltip
 *
 * @author Michael Hsu
 */

import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import Card from '../Card';
import P from '../P';
import Small from '../Small';

const StyledCard = Card.extend`
  padding: 8px;
`;

const RechartTooltip = ({
  active,
  label,
  payload,
  formatter,
  labelFormatter,
}) => {
  if (!active) return null;

  return (
    <StyledCard>
      <P>{formatter(payload[0].value)}</P>
      <P color="grayDark">
        <Small>{labelFormatter(label)}</Small>
      </P>
    </StyledCard>
  );
};

RechartTooltip.propTypes = {
  // ref: http://recharts.org/#/en-US/api/Tooltip
  active: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  payload: PropTypes.array, // dataPoint
  formatter: PropTypes.func,
  labelFormatter: PropTypes.func,
};

RechartTooltip.defaultProps = {
  active: false,
  formatter: R.identity,
  labelFormatter: R.identity,
};

export default RechartTooltip;

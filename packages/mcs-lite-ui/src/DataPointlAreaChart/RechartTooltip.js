/**
 * CustomContentOfTooltip
 * ref: http://recharts.org/#/en-US/examples/CustomContentOfTooltip
 *
 * @author Michael Hsu
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import Card from '../Card';
import P from '../P';
import Small from '../Small';

const StyledCard = styled(Card)`
  padding: 8px;
`;

class RechartTooltip extends React.Component {
  static propTypes = {
    // ref: http://recharts.org/#/en-US/api/Tooltip
    active: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    payload: PropTypes.array, // dataPoint
    formatter: PropTypes.func,
    labelFormatter: PropTypes.func,
  }

  static defaultProps = {
    active: false,
    formatter: R.identity,
    labelFormatter: R.identity,
  }

  render() {
    const { formatter, labelFormatter } = this.props;
    if (!this.props.active) return null;

    return (
      <StyledCard>
        <P>{formatter(this.props.payload[0].value)}</P>
        <P color="grayBase">
          <Small>{labelFormatter(this.props.label)}</Small>
        </P>
      </StyledCard>
    );
  }
}

export default RechartTooltip;

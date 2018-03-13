// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Panel from '../Panel';

export const MAX_WIDTH = 618;

const ResponsivePanel = styled(Panel)`
  max-width: ${props => props.width}px;
  margin: auto; /* Note: center by default and top for overflow, ref: https://goo.gl/3i1sSD */

  > header {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  > footer {
    display: flex;
    justify-content: center;

    > * + * {
      margin-left: 10px;
    }
  }
`;

ResponsivePanel.displayName = ResponsivePanel;
ResponsivePanel.propTypes = {
  width: PropTypes.number,
};
ResponsivePanel.defaultProps = {
  width: MAX_WIDTH,
};

export default ResponsivePanel;

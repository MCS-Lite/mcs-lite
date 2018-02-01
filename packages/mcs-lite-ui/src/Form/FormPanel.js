// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Panel from '../Panel';

export const MAX_WIDTH = 618;

const FormPanel: React.ComponentType<{
  width?: number,
}> = styled(Panel)`
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

FormPanel.displayName = FormPanel;
FormPanel.propTypes = {
  width: PropTypes.number,
};
FormPanel.defaultProps = {
  width: MAX_WIDTH,
};

export default FormPanel;

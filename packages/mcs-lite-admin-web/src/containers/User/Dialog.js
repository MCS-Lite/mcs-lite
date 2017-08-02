import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MLDialog from 'mcs-lite-ui/lib/Dialog';
import Panel from 'mcs-lite-ui/lib/Panel';
import Button from 'mcs-lite-ui/lib/Button';
import Warning from '../../statics/images/img_warning.svg';

const StyledDialog = styled(MLDialog)`
  justify-content: center;
`;

const ScrollableWrapper = styled.div`
  width: 100%;
`;

const StyledPanel = styled(Panel)`
  width: 440px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  overflow: auto;

  > header {
    padding-left: 20px;
    display: flex;
    align-items: center;
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      margin-bottom: 20px;
    }
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: center;

    > *:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const Dialog = ({ show, onHide, children }) =>
  <StyledDialog show={show} onHide={onHide}>
    <ScrollableWrapper>
      <StyledPanel>
        {children}
      </StyledPanel>
    </ScrollableWrapper>
  </StyledDialog>;

Dialog.displayName = 'Dialog';
Dialog.propTypes = {
  // Props
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dialog;

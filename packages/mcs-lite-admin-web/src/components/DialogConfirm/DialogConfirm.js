import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dialog from 'mcs-lite-ui/lib/Dialog';
import Panel from 'mcs-lite-ui/lib/Panel';
import Button from 'mcs-lite-ui/lib/Button';
import Warning from '../../statics/images/img_warning.svg';

const StyledDialog = styled(Dialog)`
  justify-content: center;
  z-index: 4; /* Fixed for codemirror line-number */
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

const DialogConfirm = ({
  show,
  onCancel,
  onSubmit,
  children,
  getMessages: t,
}) =>
  <StyledDialog show={show} onHide={onCancel}>
    <StyledPanel>
      <header>{t('notice')}</header>
      <main>
        <img src={Warning} alt="warning" />
        {children}
      </main>
      <footer>
        <Button kind="default" onClick={onCancel}>{t('cancel')}</Button>
        <Button onClick={onSubmit}>{t('confirm')}</Button>
      </footer>
    </StyledPanel>
  </StyledDialog>;

DialogConfirm.displayName = 'DialogConfirm';
DialogConfirm.propTypes = {
  // Props
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default DialogConfirm;

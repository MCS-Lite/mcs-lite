import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommonDialog from 'mcs-lite-ui/lib/Dialog/CommonDialog';
import Button from 'mcs-lite-ui/lib/Button';
import Warning from '../../statics/images/img_warning.svg';

const StyledDialog = styled(CommonDialog)`
  justify-content: center;
  z-index: 4; /* Fixed for codemirror line-number */
`;

const DialogConfirm = ({
  show,
  onCancel,
  onSubmit,
  children,
  getMessages: t,
}) =>
  <StyledDialog show={show} onHide={onCancel}>
    <header>{t('notice')}</header>
    <main>
      <img src={Warning} alt="warning" />
      {children}
    </main>
    <footer>
      <Button kind="default" onClick={onCancel}>{t('cancel')}</Button>
      <Button onClick={onSubmit}>{t('confirm')}</Button>
    </footer>
  </StyledDialog>;

DialogConfirm.displayName = 'DialogConfirm';
DialogConfirm.propTypes = {
  // Props
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default DialogConfirm;

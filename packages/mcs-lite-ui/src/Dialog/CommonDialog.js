import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Dialog from "./Dialog";
import Panel from "../Panel";

const StyledPanel = styled(Panel)`
  width: 440px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);

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

const CommonDialog = ({
  component: Component,
  show,
  onHide,
  onSubmit,
  children,
  ...otherProps
}) => (
  <Dialog show={show} onHide={onHide} {...otherProps}>
    <Component onSubmit={Component === "form" ? onSubmit : null}>
      <StyledPanel>{children}</StyledPanel>
    </Component>
  </Dialog>
);

CommonDialog.displayName = "CommonDialog";
CommonDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onSubmit: PropTypes.func
};
CommonDialog.defaultProps = {
  component: "div"
};

export default CommonDialog;

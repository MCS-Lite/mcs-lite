import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Button from "../Button";
import Dialog from ".";
import CommonDialog from "./CommonDialog";

const StyledCommonDialog = styled(CommonDialog)`
  justify-content: center;
`;

storiesOf("Dialog", module)
  .add(
    "API",
    withInfo({
      text: "",
      inline: true,
      propTables: [Dialog]
    })(() => {
      class StatefulDialog extends React.Component {
        state = { show: false };
        onShow = () => this.setState({ show: true });
        onHide = () => this.setState({ show: false });
        render() {
          return (
            <div>
              <div onClick={this.onShow}>Click to OPEN!</div>

              <Dialog show={this.state.show} onHide={this.onHide}>
                <div>Content</div>
              </Dialog>
            </div>
          );
        }
      }

      return <StatefulDialog />;
    })
  )
  .add(
    "Common Dialog",
    withInfo({
      text: "Wrap in a <form> tag, you need to preventDefault()",
      inline: true,
      propTables: [CommonDialog]
    })(() => (
      <StyledCommonDialog
        component="form"
        show
        onHide={() => {}}
        onSubmit={e => {
          action("onSubmit")(e);
          e.preventDefault();
        }}
      >
        <header>Notice!</header>
        <main>是否確定重置系統？</main>
        <footer>
          <Button
            kind="default"
            onClick={e => {
              action("onCancel")(e);
              e.preventDefault();
            }}
          >
            取消
          </Button>
          <Button component="input" type="submit" value={"確定"} />
        </footer>
      </StyledCommonDialog>
    ))
  )
  .add(
    "Scrollable CommonDialog",
    withInfo({
      text: "",
      inline: true,
      propTables: [CommonDialog]
    })(() => (
      <CommonDialog show onHide={() => {}}>
        <div style={{ height: 3000 }}>Scrollable</div>
      </CommonDialog>
    ))
  );

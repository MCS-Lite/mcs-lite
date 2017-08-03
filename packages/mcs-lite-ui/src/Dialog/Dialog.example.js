import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import Dialog from '.';
import CommonDialog from './CommonDialog';

const StyledCommonDialog = styled(CommonDialog)`
  justify-content: center;
`;

storiesOf('Dialog', module)
  .addWithInfo(
    'API',
    '',
    () => {
      class StatefulDialog extends React.Component {
        state = { show: false };
        onShow = () => this.setState({ show: true });
        onHide = () => this.setState({ show: false });
        render() {
          return (
            <div>
              <div onClick={this.onShow}>
                Click to OPEN!
              </div>

              <Dialog show={this.state.show} onHide={this.onHide}>
                <div>Content</div>
              </Dialog>
            </div>
          );
        }
      }

      return <StatefulDialog />;
    },
    { inline: true, propTables: [Dialog] },
  )
  .addWithInfo(
    'Common Dialog',
    'Wrap in a <form> tag, you need to preventDefault()',
    () =>
      <StyledCommonDialog
        component="form"
        show
        onHide={() => {}}
        onSubmit={e => {
          action('onSubmit')(e);
          e.preventDefault();
        }}
      >
        <header>Notice!</header>
        <main>
          是否確定重置系統？
        </main>
        <footer>
          <Button
            kind="default"
            onClick={e => {
              action('onCancel')(e);
              e.preventDefault();
            }}
          >
            取消
          </Button>
          <Button component="input" type="submit" value={'確定'} />
        </footer>
      </StyledCommonDialog>,
    { inline: true, propTables: [CommonDialog] },
  )
  .addWithInfo(
    'Scrollable CommonDialog',
    '',
    () =>
      <CommonDialog show onHide={() => {}}>
        <div style={{ height: 3000 }}>Scrollable</div>
      </CommonDialog>,
    { inline: true, propTables: [CommonDialog] },
  );

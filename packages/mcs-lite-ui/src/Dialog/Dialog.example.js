import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Panel from '../Panel';
import Button from '../Button';
import Dialog from '.';

const StyledDialog = styled(Dialog)`
  justify-content: center;
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
    'Confirm Dialog',
    '',
    () =>
      <StyledDialog show onHide={() => {}}>
        <StyledPanel>
          <header>Notice!</header>
          <main>
            是否確定重置系統？
          </main>
          <footer>
            <Button kind="default">取消</Button>
            <Button>確定</Button>
          </footer>
        </StyledPanel>
      </StyledDialog>,
    { inline: true, propTables: [Dialog] },
  );

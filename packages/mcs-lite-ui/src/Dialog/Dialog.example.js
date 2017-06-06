import React from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from '.';

storiesOf('Dialog', module).addWithInfo(
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
);

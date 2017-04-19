import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DomAlign from '.';

const alignConfig = {
  points: ['tr', 'br'], // bottom-right
  offset: [50, 5],
};

class Container extends React.Component {
  state = { target: undefined };
  getTarget = node => this.setState({ target: node });
  render() {
    return (
      <div>
        <div ref={this.getTarget}>
          Target node
        </div>
        <DomAlign alignConfig={alignConfig} target={this.state.target}>
          <div>
            Source node
          </div>
        </DomAlign>
      </div>
    );
  }
}

storiesOf('DomAlign', module).addWithInfo(
  'API',
  `
      With config: ${JSON.stringify(alignConfig)}.

      Reference: React.js [dom-align](https://github.com/yiminghe/dom-align) integration component.

    `,
  () => <Container />,
  { inline: true, propTables: [DomAlign] },
);

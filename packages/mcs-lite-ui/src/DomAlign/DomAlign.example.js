import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
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

storiesOf('DomAlign', module).add(
  'API',
  withInfo({
    text: `
      With config: ${JSON.stringify(alignConfig)}.

      Reference: React.js [dom-align](https://github.com/yiminghe/dom-align) integration component.

    `,

    inline: true,
    propTables: [DomAlign],
  })(() => <Container />),
);

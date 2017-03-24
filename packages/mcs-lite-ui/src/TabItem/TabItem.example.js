import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TabItem from '.';

class StatefulTabItems extends React.Component {
  state = { value: '' };
  onChange = (e, value) => this.setState({ value });
  render() {
    const { items } = this.props;
    const { onChange } = this;
    const { value } = this.state;
    return (
      <div>
        {items.map(i => (
          <TabItem key={i} value={i} onClick={onChange} active={i === value}>
            {`Tab ${i}`}
          </TabItem>
        ))}
      </div>
    );
  }
}

storiesOf('TabItem', module)
  .addWithInfo(
    'API',
    '',
    () => (
      <div>
        <TabItem value="key" onClick={action('onClick')}>
          TabItem
        </TabItem>
        <TabItem value="key" active onClick={action('onClick')}>
          Active TabItem
        </TabItem>
      </div>
    ),
    { inline: true }
  )
  .addWithInfo(
    'With color props',
    '',
    () => (
      <div>
        <TabItem value={1} color="warning">TabItem 1</TabItem>
        <TabItem value={2} color="warning" active>TabItem 2</TabItem>
      </div>
    ),
    { inline: true }
  )
  .addWithInfo(
    'With state',
    'This is a react controlled component.',
    () => <StatefulTabItems items={[1, 2, 3]} />,
    { inline: true, propTables: [TabItem] }
  );

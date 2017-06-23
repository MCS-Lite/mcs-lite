import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Icons from 'mcs-lite-icon/lib/index';
import MorphReplace from '.';

class StatefulMorphReplace extends React.Component {
  state = { checked: false };
  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ checked: !prevState.checked }));
    }, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <MorphReplace>
        {this.state.checked ? this.props.from : this.props.to}
      </MorphReplace>
    );
  }
}

storiesOf('MorphReplace', module).addWithInfo(
  'API',
  '',
  () =>
    <div>
      <StatefulMorphReplace
        from={<Icons.IconMenu />}
        to={<Icons.IconArrowLeft />}
      />
      <StatefulMorphReplace
        from={<Icons.IconClose />}
        to={<Icons.IconMenu />}
      />
      <StatefulMorphReplace
        from={<Icons.IconCalendar />}
        to={<Icons.IconDelete />}
      />
      <StatefulMorphReplace from={<Icons.IconSync />} to={<Icons.IconStop />} />
      <StatefulMorphReplace
        from={<Icons.IconLoading />}
        to={<Icons.IconDone />}
      />
    </div>,
  { inline: true, propTables: [MorphReplace] },
);

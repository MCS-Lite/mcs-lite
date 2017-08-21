import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import * as Icons from 'mcs-lite-icon/lib/index';
import MorphReplace from '.';

class StatefulMorphReplace extends React.Component {
  static propTypes = {
    from: PropTypes.element.isRequired,
    to: PropTypes.element.isRequired,
  };
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

storiesOf('MorphReplace', module).add(
  'API',
  withInfo({
    text: '',
    inline: true,
    propTables: [MorphReplace],
  })(() =>
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
  ),
);

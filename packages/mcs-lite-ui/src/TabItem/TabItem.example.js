import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import TabItem from ".";

class StatefulTabItems extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.number).isRequired
  };
  state = { value: "" };
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

storiesOf("TabItem", module)
  .add(
    "API",
    withInfo({
      text: "",
      inline: true
    })(() => (
      <div>
        <TabItem value="key" onClick={action("onClick")}>
          TabItem
        </TabItem>
        <TabItem value="key" active onClick={action("onClick")}>
          Active TabItem
        </TabItem>
      </div>
    ))
  )
  .add(
    "With color props",
    withInfo({
      text: "",
      inline: true
    })(() => (
      <div>
        <TabItem value={1} color="warning">
          TabItem 1
        </TabItem>
        <TabItem value={2} color="warning" active>
          TabItem 2
        </TabItem>
      </div>
    ))
  )
  .add(
    "With state",
    withInfo({
      text: "This is a react controlled component.",
      inline: true,
      propTables: [TabItem]
    })(() => <StatefulTabItems items={[1, 2, 3]} />)
  );

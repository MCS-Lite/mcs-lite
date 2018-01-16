import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { kindList, theme } from "mcs-lite-theme";

const JsonDisplay = ({ data }) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);
JsonDisplay.displayName = "JsonDisplay";
JsonDisplay.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

storiesOf("API [mcs-lite-theme]", module)
  .add("[JSON] theme", () => <JsonDisplay data={theme} />)
  .add("[JSON] kind", () => <JsonDisplay data={kindList} />);

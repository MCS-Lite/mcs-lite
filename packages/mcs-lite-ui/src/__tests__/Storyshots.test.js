import React from 'react';
import initStoryshots from '@storybook/addon-storyshots';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';

/**
 * Hint: mock for snapshot
 * ref: https://github.com/storybooks/storybook/issues/1011#issuecomment-322698049
 *
 * @author Michael Hsu
 */

const addonInfo = require('@storybook/addon-info'); // eslint-disable-line
addonInfo.withInfo = () => storyFn => storyFn;
const sbReact = require('@storybook/react'); // eslint-disable-line
sbReact.addDecorator = () => {};

// Using this function means we'll see the change in the css in the snapshot
// diff instead of just the change in classname
const styledSnapshot = ({ story, context }) => {
  const storyElement = (
    <ThemeProvider theme={theme}>
      {story.render(context)}
    </ThemeProvider>
  );
  const tree = renderer.create(storyElement).toJSON();
  expect(tree).toMatchSnapshot();
};

/**
 * Ignore Snapshot testing with "[Skip]" in story name.
 *
 * @author Michael Hsu
 */

initStoryshots({
  storyRegex: /^((?!\[Skip\]).)*$/,
  test: styledSnapshot,
});

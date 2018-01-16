// @flow
import * as React from 'react';
import initStoryshots, {
  getSnapshotFileName,
} from '@storybook/addon-storyshots';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer';
import { addSerializer } from 'jest-specific-snapshot';

/**
 * Add custom serializer for toMatchSpecificSnapshot
 * ref: https://github.com/storybooks/storybook/issues/887#issuecomment-357073807
 */
addSerializer(styleSheetSerializer);

/**
 * Ignore Snapshot testing with "[Skip]" in story name.
 *
 * @author Michael Hsu
 */
initStoryshots({
  storyRegex: /^((?!\[Skip\]).)*$/,
  test: ({ story, context }) => {
    const snapshotFileName = getSnapshotFileName(context);
    const storyElement = (
      <ThemeProvider theme={theme}>{story.render(context)}</ThemeProvider>
    );

    const tree = renderer.create(storyElement).toJSON();
    // expect(tree).toMatchSnapshot();
    (expect(tree): any).toMatchSpecificSnapshot(snapshotFileName);

    // Note: We just snapshot children without the ThemeProvider
    // const tree = mount(storyElement).children();
    // const json = toJson(tree);

    // if (snapshotFileName) {
    //   // Remind: property `toMatchSpecificSnapshot`. Property not found in Jest flowtype
    //   (expect(json): any).toMatchSpecificSnapshot(snapshotFileName);
    // }
  },
});

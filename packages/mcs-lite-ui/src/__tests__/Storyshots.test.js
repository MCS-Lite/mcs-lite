import initStoryshots from '@storybook/addon-storyshots';

/**
 * Ignore Snapshot testing with "[Skip]" in story name.
 *
 * @author Michael Hsu
 */

initStoryshots({
  storyRegex: /^((?!\[Skip\]).)*$/,
});

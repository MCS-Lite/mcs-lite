// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import ImageDropzone from '.';

storiesOf('ImageDropzone', module)
  .add(
    'API',
    withInfo({
      text: 'default',
      inline: true,
    })(() => <ImageDropzone onDrop={files => action('onDrop')(files)} />),
  )
  .add(
    'With children',
    withInfo({
      text: 'default',
      inline: true,
    })(() => (
      <ImageDropzone onDrop={files => action('onDrop')(files)}>
        Drop an image here to upload !
      </ImageDropzone>
    )),
  )
  .add(
    'With isLoading',
    withInfo({
      text: 'isLoading',
      inline: true,
    })(() => (
      <ImageDropzone onDrop={files => action('onDrop')(files)} isLoading>
        Drop an image here to upload !
      </ImageDropzone>
    )),
  )
  .add(
    'With src',
    withInfo({
      text: 'src image',
      inline: true,
    })(() => (
      <ImageDropzone
        onDrop={files => action('onDrop')(files)}
        src="//img.mediatek.com/350/mtk.linkit/productBanner.png"
      >
        Drop an image here to upload !
      </ImageDropzone>
    )),
  );

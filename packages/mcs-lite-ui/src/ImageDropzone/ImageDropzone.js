/* eslint react/default-props-match-prop-types: 0 */
// @flow
import * as React from 'react';
import IconLoading from 'mcs-lite-icon/lib/IconLoading';
import PropTypes from 'prop-types';
import Dropzone from 'react-dnd-dropzone';
import P from '../P';
import LoadingWrapper from './LoadingWrapper';
import Container from './Container';
import Image from './Image';

type File = { name: string, type: string, size: number };

const HEIGHT = 137;

const ImageDropzone = ({
  isLoading,
  src,
  onDrop,
  height,
  children,
}: {
  isLoading?: boolean,
  src?: string,
  onDrop: (file: Array<File>) => Promise<void> | void,
  height: number,
  children?: React.Node,
}) => (
  <Dropzone
    onDrop={onDrop}
    render={({ canDrop }) => (
      <Container canDrop={canDrop} src={src} height={height}>
        {isLoading && (
          <LoadingWrapper>
            <IconLoading size={24} />
          </LoadingWrapper>
        )}

        {!src && (
          <React.Fragment>
            <Image />
            {children && <P color="grayDark">{children}</P>}
          </React.Fragment>
        )}
      </Container>
    )}
  />
);

ImageDropzone.displayName = 'ImageDropzone';
ImageDropzone.propTypes = {
  isLoading: PropTypes.bool,
  src: PropTypes.string,
  onDrop: PropTypes.func, // (file: Array<File>) => Promise<void> | void,
  height: PropTypes.number,
  children: PropTypes.node,
};
ImageDropzone.defaultProps = {
  height: HEIGHT,
};
export default ImageDropzone;

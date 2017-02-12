/* eslint import/prefer-default-export: 0 */

import styled from 'styled-components';
import MaxWidthCenterWrapper from '../../components/MaxWidthCenterWrapper';

export const Container = styled(MaxWidthCenterWrapper)`
  padding: 16px 16px 56px 16px;

  > div + div {
    margin-top: 8px;
  }
`;

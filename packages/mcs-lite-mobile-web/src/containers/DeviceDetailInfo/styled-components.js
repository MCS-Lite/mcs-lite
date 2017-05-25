/* eslint import/prefer-default-export: 0 */

import styled from 'styled-components';
import MobileContentWrapper from 'mcs-lite-ui/lib/MobileContentWrapper';

export const Container = styled(MobileContentWrapper)`
  padding: 16px 16px 56px 16px;

  > div + div {
    margin-top: 8px;
  }

  p {
    word-wrap: break-word;
  }
`;

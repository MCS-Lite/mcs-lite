// @flow
import * as React from 'react';
import styled from 'styled-components';

const Breadcrumb: React.ComponentType<{}> = styled.div`
  display: flex;

  > * + * {
    &::before {
      content: '>';
      margin: 0 5px;
      color: ${props => props.theme.color.black};
    }
  }
`;
Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import styled from 'styled-components';
import * as Icon from 'mcs-lite-icon/lib/index';
import Heading from '../Heading';
import Card from '../Card';

const IconWrapper = styled(Heading)`
  display: flex;
  flex-direction: column;
  align-items: center;

  > *:first-child {
    margin-bottom: 5px;
  }
`;

const StyledCard = styled(Card)`
  display: inline-flex;
  align-items: center;
  margin: 8px;
  padding: 16px;
`;

storiesOf('Icon')
  .addWithInfo(
    'API',
    '',
    () =>
      <Icon.IconEllipsisV />,
    { inline: true },
  )
  .addWithInfo(
    'Icon list, Custom color and size',
    '',
    () =>
      <div>
        {
          Object.keys(Icon).map(name => (
            <StyledCard key={name}>
              <IconWrapper color="primary" level={2}>
                {React.createElement(Icon[name])}
                {`<${name} />`}
              </IconWrapper>
            </StyledCard>
          ))
        }
      </div>,
    { inline: false, propTables: false },
  );

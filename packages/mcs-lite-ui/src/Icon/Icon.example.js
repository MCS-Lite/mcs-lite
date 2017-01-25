import React from 'react';
import { storiesOf } from '@kadira/storybook';
import styled from 'styled-components';
import Heading from '../Heading';
import Card from '../Card';

const mcsLiteIcon = require('mcs-lite-icon');

const Icons = Object.keys(mcsLiteIcon);

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
      <mcsLiteIcon.IconEllipsisV />,
    { inline: true },
  )
  .addWithInfo(
    'Icon list, Custom color and size',
    '',
    () =>
      <div>
        {
          Icons.map(name => (
            <StyledCard key={name}>
              <IconWrapper color="primary" level={2}>
                {React.createElement(mcsLiteIcon[name])}
                {`<${name} />`}
              </IconWrapper>
            </StyledCard>
          ))
        }
      </div>,
    { inline: false, propTables: false },
  );

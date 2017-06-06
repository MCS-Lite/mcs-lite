// @flow
import styled from 'styled-components';

const Panel = styled.div`
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  background-color: ${props => props.theme.color.white};

  > header {
    background-color: ${props => props.theme.color.grayLight};
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
    height: 50px;
  }

  > main, > footer {
    padding: 20px;
  }
`;

Panel.displayName = 'Panel';

export default Panel;

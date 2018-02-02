// @flow
import styled from 'styled-components';

const PanelIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.height.header};
  height: ${props => props.theme.height.header};
  background-color: ${props => props.theme.color.primary};
  border-radius: 3px;
  font-size: 24px;
  color: ${props => props.theme.color.white};

  > svg {
    fill: ${props => props.theme.color.white};
  }
`;
PanelIcon.displayName = 'PanelIcon';

export default PanelIcon;

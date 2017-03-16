import styled from 'styled-components';
import { opacity } from 'mcs-lite-theme';

const lighten = opacity(0.9);

const Notification = styled.div`
  box-sizing: border-box;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${props => lighten(props.theme.color.black)};
  color: ${props => props.theme.color.white};

  > *:nth-child(2) {
    margin-left: 8px;
    flex-shrink: 0;
  }
`;

Notification.displayName = 'Notification';

export default Notification;

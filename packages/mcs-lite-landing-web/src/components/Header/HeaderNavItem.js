import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HEIGHT } from './FixedContainer';

const HeaderNavItem = styled.div`
  height: ${HEIGHT}px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props =>
    props.active ? props.theme.color.black : props.theme.color.grayBase};
  transition: color cubic-bezier(0.47, 0, 0.75, 0.72) 0.3s;

  &:hover {
    color: ${props => props.theme.color.black};
  }
`;

HeaderNavItem.displayName = 'HeaderNavItem';
HeaderNavItem.propTypes = {
  active: PropTypes.bool,
};
HeaderNavItem.defaultProps = {
  active: false,
};
export default HeaderNavItem;

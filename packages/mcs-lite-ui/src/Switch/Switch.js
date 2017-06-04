import PropTypes from 'prop-types';
import styled from 'styled-components';

const Switch = styled.div`
  position: relative;
  height: 50px;
  width: 82px;
  box-sizing: border-box;
  border-radius: 24px;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
  cursor: pointer;
  background-color: ${props =>
    props.checked ? props.theme.color[props.kind] : props.theme.color.grayBase};
  transform-origin: 0 0;

  &::after {
    content: " ";
    position: absolute;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: ${props => props.theme.color.white};
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.17);
    top: 3px;
    left: ${props => (props.checked ? '32px' : 0)};
    transition: left cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
    margin: 0 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

Switch.displayName = 'Switch';
Switch.propTypes = {
  kind: PropTypes.string,
  checked: PropTypes.bool,
};
Switch.defaultProps = {
  kind: 'success',
  checked: false,
};

export default Switch;

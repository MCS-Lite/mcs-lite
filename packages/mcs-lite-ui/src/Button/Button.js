import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: 'blue',
  },
};

export default Button;

import styled from 'styled-components';

const MaxWidthCenterWrapper = styled.div`
  max-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
  border: 1px dashed ${props => props.theme.color.black};
`;

export default MaxWidthCenterWrapper;

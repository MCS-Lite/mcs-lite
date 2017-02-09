import styled from 'styled-components';

const MaxWidthCenterWrapper = styled.div`
  max-width: 600px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  border: 1px dashed ${props => props.theme.color.black};
  padding: 16px;
`;

export default MaxWidthCenterWrapper;

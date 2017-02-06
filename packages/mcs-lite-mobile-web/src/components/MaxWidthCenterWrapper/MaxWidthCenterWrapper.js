import styled from 'styled-components';

const MaxWidthCenterWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 8px;
  border: 1px dashed ${props => props.theme.color.black};
`;

export default MaxWidthCenterWrapper;

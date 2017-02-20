import styled from 'styled-components';

const MobileContentWrapper = styled.div`
  max-width: ${props => props.theme.mobile.maxWidth};
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;

MobileContentWrapper.displayName = 'MobileContentWrapper';

export default MobileContentWrapper;

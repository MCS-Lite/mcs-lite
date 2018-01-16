import styled from 'styled-components';
import Img from 'mcs-lite-ui/lib/Img';
import MobileContentWrapper from 'mcs-lite-ui/lib/MobileContentWrapper';

export const Container = styled(MobileContentWrapper)`
  padding: 4px;
`;

export const StyledImg = styled(Img)`
  height: 192px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    height: initial;
    padding: 8px 16px;
    margin: 4px;
    flex-basis: 100%;
  }

  > [data-width ~=' half'] {
    flex-grow: 1;
    flex-basis: 40%;
  }
`;

export const CardHeaderIcon = styled.div`
  padding-left: 8px;
  font-size: 24px;
  color: ${props => props.theme.color.primary};
`;

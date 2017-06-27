import styled from 'styled-components';
import { Column, withBreakpoints } from 'hedron';
import SectionRow from '../../components/SectionRow';

export const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FAFAFA 0%, #F1F2F7 100%);
  padding-bottom: 0;
  overflow: hidden;
`;

export const RWDCenterWrapper = withBreakpoints(styled.div`

  @media (max-width: ${props => props.breakpoints.md}px) {
    text-align: center;
  }
`);

export const StyledImageColumn = styled(Column)`
  padding-bottom: 0;
`;

export const ScreenImageMobile = withBreakpoints(styled.img`
  display: none;
  height: auto;
  width: 100%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: ${props => props.breakpoints.sm}px) {
    display: block;
  }
`);

export const ImageLayerWrapper = styled.div`
  position: relative;
  height: ${props => props.height}px;

  > * {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const BackgroundImage = styled.img`
  height: 100%;
  width: auto;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const BackgroundImageWrapper = styled.div`
  height: 100%;
  text-align: center;
`;

export const ChartWrapper = withBreakpoints(styled.div`

  @media (max-width: ${props => props.breakpoints.md}px) {
    display: flex;
    justify-content: center;
  }
`);

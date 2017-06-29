import styled from 'styled-components';
import { Column, withBreakpoints } from 'hedron';
import SectionRow from '../../components/SectionRow';

export const IMAGE_HEIGHT = 350; // image = 350 * 577
export const IMAGE_WIDTH = 577; // image = 350 * 577

export const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FAFAFA 0%, #F1F2F7 100%);
  padding-bottom: 0;
  overflow: hidden;
`;

export const RWDCenterWrapper = withBreakpoints(styled.div`
  text-align: center;

  @media (min-width: ${props => props.breakpoints.md}px) {
    text-align: left;
  }
`);

export const StyledImageColumn = styled(Column)`
  padding-bottom: 0;
`;

export const ScreenImageMobile = withBreakpoints(styled.img`
  display: block;
  height: auto;
  width: 100%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1);
`);

export const ImageLayerWrapper = withBreakpoints(styled.div`
  position: relative;

  @media (min-width: ${props => props.breakpoints.sm}px) {
    height: ${props => props.height}px;

    > * {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`);

export const BackgroundImage = withBreakpoints(styled.img`
  display: none;

  @media (min-width: ${props => props.breakpoints.sm}px) {
    display: initial;
    height: 100%;
    width: auto;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1);
  }
`);

export const BackgroundImagePlaceholder = withBreakpoints(styled.img`
  display: block;
  height: auto;
  width: 100%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1);

  @media (min-width: ${props => props.breakpoints.sm}px) {
    display: initial;
    height: 100%;
    width: auto;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1);
  }
`);

export const BackgroundImageWrapper = styled.div`
  height: 100%;
  text-align: center;
`;

export const LoadingWrapper = withBreakpoints(styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateY(-100%);
  left: 0;
  right: 0;

  @media (min-width: ${props => props.breakpoints.md}px) {
    width: ${IMAGE_WIDTH}px;
  }

  @media (min-width: ${props => props.breakpoints.sm}px) {
    position: initial;
    transform: translateY(0);
    left: initial;
    right: initial;
  }
`);

export const ChartWrapper = withBreakpoints(styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${props => props.breakpoints.md}px) {
    display: block;
  }
`);

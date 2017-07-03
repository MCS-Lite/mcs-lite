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

export const StyledImageColumn = styled(Column)`
  padding-bottom: 0;
`;

export const RWDCenterWrapper = withBreakpoints(styled.div`
  text-align: center;

  @media (min-width: ${props => props.breakpoints.md}px) {
    text-align: left;
  }
`);

export const ImageLayerWrapper = withBreakpoints(styled.div`

  img {
    display: block;
    height: auto;
    width: 100%;
    min-height: initial;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1);
  }

  @media (min-width: ${props => props.breakpoints.sm}px) {
    position: relative;
    height: ${IMAGE_HEIGHT}px;

    > * {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    img {
      display: initial;
      height: 100%;
      width: auto;
    }
  }

  @media (min-width: ${props => props.breakpoints.md}px) {

    > * {
      display: block;
    }
  }
`);

export const ChartWrapper = withBreakpoints(styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${props => props.breakpoints.md}px) {
    align-items: flex-end;
    justify-content: flex-start;
  }
`);

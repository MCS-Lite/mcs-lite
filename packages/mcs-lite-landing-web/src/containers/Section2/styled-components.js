import styled from 'styled-components';
import SectionRow from '../../components/SectionRow';
import BackgroundImage from '../../components/BackgroundImage';

export const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #FDFDFD 47%, #FAFAFA 100%);
`;

export const MacImage = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
`;

export const BackgroundImageContain = styled(BackgroundImage)`
  background-size: contain;
`;

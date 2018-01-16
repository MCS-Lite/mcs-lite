import styled from "styled-components";
import A from "mcs-lite-ui/lib/A";
import SectionRow from "../../components/SectionRow";

export const StyledSectionRow = styled(SectionRow)`
  background-image: linear-gradient(
    -180deg,
    #ffffff 0%,
    #fdfdfd 47%,
    #fafafa 100%
  );
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 385px;
  overflow-x: hidden;

  > ${A} {
    /* Flexbox column align self to bottom trick ref: https://goo.gl/oqMFju */
    margin-top: auto;
    align-self: center;
  }
`;

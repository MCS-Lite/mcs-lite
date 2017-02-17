import React from 'react';
import styled from 'styled-components';
import { Heading, B } from 'mcs-lite-ui';
import IconMenu from 'mcs-lite-icon/lib/IconMenu';
import IconArrowLeft from 'mcs-lite-icon/lib/IconArrowLeft';
import MaxWidthCenterWrapper from '../MaxWidthCenterWrapper';
import HeaderIcon from '../HeaderIcon';
import updatePathname from '../../utils/updatePathname';

export const HEIGHT = '56px;';

const Container = styled.header`
  height: ${HEIGHT};
`;

const Fixed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.color.primary};
  height: ${HEIGHT};
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled(MaxWidthCenterWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
`;

const Center = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
`;

const Right = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
`;

const StyledHeading = styled(Heading)`
  user-select: none;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Header = ({ title, backTo, children }) =>
  <Container>
    <Fixed>
      <Wrapper>
        <Left>
          {backTo
            ? <HeaderIcon to={backTo}><IconArrowLeft /></HeaderIcon>
            : <HeaderIcon to={updatePathname('/account')}><IconMenu /></HeaderIcon>
          }
        </Left>
        {title &&
          <Center>
            <StyledHeading level={3} color="white"><B>{title}</B></StyledHeading>
          </Center>
        }
        <Right>{children}</Right>
      </Wrapper>
    </Fixed>
  </Container>;

export default Header;

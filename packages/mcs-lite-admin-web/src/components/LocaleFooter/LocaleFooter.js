import React from "react";
import styled from "styled-components";
import { Link } from "react-router";
import Small from "mcs-lite-ui/lib/Small";
import { updateLocale } from "mcs-lite-ui/lib/utils/routerHelper";
import { LOCALES } from "mcs-lite-ui/lib/utils/localeHelper";

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 0;
  left: 0;
  text-align: center;

  * {
    color: ${props => props.theme.color.grayBase};
    text-decoration: none;
  }

  > a:not(:last-child) {
    &::after {
      content: "\\00a0·\\00a0";
    }
  }
`;

const LocaleFooter = () => (
  <Wrapper>
    {LOCALES.map(({ id, children }) => (
      <Link key={id} to={updateLocale(id)}>
        <Small>{children}</Small>
      </Link>
    ))}
  </Wrapper>
);

LocaleFooter.displayName = "LocaleFooter";

export default LocaleFooter;

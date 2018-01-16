import React from "react";
import PropTypes from "prop-types";
import { Row, Column } from "hedron";
import Heading from "mcs-lite-ui/lib/Heading";
import P from "mcs-lite-ui/lib/P";
import B from "mcs-lite-ui/lib/B";
import A from "mcs-lite-ui/lib/A";
import Button from "mcs-lite-ui/lib/Button";
import TextCenter from "mcs-lite-ui/lib/TextCenter";
import SpaceTop from "mcs-lite-ui/lib/SpaceTop";
import LazyloadOnce from "mcs-lite-ui/lib/LazyloadOnce";
import Loadable from "react-loadable";
import { StyledSectionRow, CardWrapper } from "./styled-components";

const HEIGHT = 170;

const LoadableImageOpenSource = Loadable({
  loader: () => import(/* webpackChunkName: "Section" */ "./ImageOpenSource"),
  loading: () => null
});
const LoadableImageImageCustom = Loadable({
  loader: () => import(/* webpackChunkName: "Section" */ "./ImageCustom"),
  loading: () => null
});

const Section4 = ({ getMessages: t }) => (
  <StyledSectionRow>
    <Column xs={12}>
      <TextCenter>
        <Heading level={2}>{t("title")}</Heading>
      </TextCenter>
    </Column>

    <Row>
      {/* 1. Open source */}
      <Column xs={12} sm={6}>
        <CardWrapper>
          <LazyloadOnce height={HEIGHT}>
            <LoadableImageOpenSource />
          </LazyloadOnce>

          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t("github.title")}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t("github.desc")}</P>
          </SpaceTop>

          <A
            href="https://github.com/MCS-Lite"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button>{t("github.button")}</Button>
          </A>
        </CardWrapper>
      </Column>

      {/* 2. Customize */}
      <Column xs={12} sm={6}>
        <CardWrapper>
          <LazyloadOnce height={HEIGHT}>
            <LoadableImageImageCustom />
          </LazyloadOnce>

          <SpaceTop height={20}>
            <Heading level={3}>
              <B>{t("custom.title")}</B>
            </Heading>
          </SpaceTop>
          <SpaceTop height={10}>
            <P>{t("custom.desc")}</P>
          </SpaceTop>

          <A
            href="https://github.com/MCS-Lite/cra-boilerplate"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button>{t("custom.button")}</Button>
          </A>
        </CardWrapper>
      </Column>
    </Row>
  </StyledSectionRow>
);

Section4.displayName = "Section4";
Section4.propTypes = {
  // React-intl I18n
  getMessages: PropTypes.func.isRequired
};

export default Section4;

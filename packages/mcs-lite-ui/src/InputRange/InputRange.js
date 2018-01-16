import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "mcs-lite-theme";

const lighten = darken(-0.5);

const InputRange = styled.input`
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 16px;
    border-radius: 8px;
    background-image: linear-gradient(-180deg, #dfdfdf 5%, #f6f6f6 96%);
    box-shadow: inset 0 1px 2px 0 rgba(255, 255, 255, 0.35),
      inset 0 0 0 2px #e5e6e6, inset 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  }

  &::-moz-range-track {
    -moz-appearance: none;
    height: 16px;
    border-radius: 8px;
    background-image: linear-gradient(-180deg, #dfdfdf 5%, #f6f6f6 96%);
    box-shadow: inset 0 1px 2px 0 rgba(255, 255, 255, 0.35),
      inset 0 0 0 2px #e5e6e6, inset 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-ms-track {
    -webkit-appearance: none;
    height: 16px;
    border-radius: 8px;
    background-image: linear-gradient(-180deg, #dfdfdf 5%, #f6f6f6 96%);
    box-shadow: inset 0 1px 2px 0 rgba(255, 255, 255, 0.35),
      inset 0 0 0 2px #e5e6e6, inset 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -12px; /* fix for chrome */
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-image: radial-gradient(
      50% 50%,
      #ffffff 50%,
      #ffffff 73%,
      #f8f8f8 81%,
      #ebebeb 90%,
      #dddddd 95%
    );
    transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 3px 0 rgba(255, 255, 255, 0.3),
      inset 0 -2px 2px 0 ${props => props.theme.color[props.kind]},
      inset 0 0 0 3px ${props => lighten(props.theme.color[props.kind])};
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    height: 40px;
    width: 40px;
    border-width: 0; /* fix for firefox */
    border-radius: 50%;
    background-image: radial-gradient(
      50% 50%,
      #ffffff 50%,
      #ffffff 73%,
      #f8f8f8 81%,
      #ebebeb 90%,
      #dddddd 95%
    );
    -moz-appearance: none;
    -moz-transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 3px 0 rgba(255, 255, 255, 0.3),
      inset 0 -2px 2px 0 ${props => props.theme.color[props.kind]},
      inset 0 0 0 3px ${props => lighten(props.theme.color[props.kind])};
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    margin-top: -12px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-image: radial-gradient(
      50% 50%,
      #ffffff 50%,
      #ffffff 73%,
      #f8f8f8 81%,
      #ebebeb 90%,
      #dddddd 95%
    );
    transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 3px 0 rgba(255, 255, 255, 0.3),
      inset 0 -2px 2px 0 ${props => props.theme.color[props.kind]},
      inset 0 0 0 3px ${props => lighten(props.theme.color[props.kind])};
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.1);
  }

  &::-ms-thumb:hover {
    transform: scale(1.1);
  }

  /* stylelint-enable */
`;

InputRange.displayName = "InputRange";
InputRange.propTypes = {
  kind: PropTypes.string
};

InputRange.defaultProps = {
  kind: "primary",
  type: "range"
};

export default InputRange;

// @flow
import React from 'react';
import styled from 'styled-components';

const InputRange = styled(props => <input type="range" {...props} />)`

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
    background-image: linear-gradient(-180deg, #DFDFDF 5%, #F6F6F6 96%);
    box-shadow:
      inset 0 1px 2px 0 rgba(255, 255, 255, 0.35),
      inset 0 0 0 2px #E5E6E6,
      inset 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  }

  &::-moz-range-track {
    -moz-appearance: none;
    height: 16px;
    border-radius: 8px;
    background-image: linear-gradient(-180deg, #DFDFDF 5%, #F6F6F6 96%);
    box-shadow:
      inset 0 1px 2px 0 rgba(255, 255, 255, 0.35),
      inset 0 0 0 2px #E5E6E6,
      inset 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-ms-track {
    -webkit-appearance: none;
    height: 16px;
    border-radius: 8px;
    background-image: linear-gradient(-180deg, #DFDFDF 5%, #F6F6F6 96%);
    box-shadow:
      inset 0 1px 2px 0 rgba(255, 255, 255, 0.35),
      inset 0 0 0 2px #E5E6E6,
      inset 0 1px 10px 0 rgba(0, 0, 0, 0.05);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -12px; /* fix for chrome */
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-image: radial-gradient(50% 50%, #FFFFFF 50%, #FFFFFF 73%, #F8F8F8 81%, #EBEBEB 90%, #DDDDDD 95%);
    transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    box-shadow:
      1px 1px 4px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 3px 0 rgba(255, 255, 255, 0.3),
      inset 0 -2px 2px 0 #00A1DE,
      inset 0 0 0 3px #79D5F8;
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    height: 40px;
    width: 40px;
    border-width: 0; /* fix for firefox */
    border-radius: 50%;
    background-image: radial-gradient(50% 50%, #FFFFFF 50%, #FFFFFF 73%, #F8F8F8 81%, #EBEBEB 90%, #DDDDDD 95%);
    -moz-appearance: none;
    -moz-transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    box-shadow:
      1px 1px 4px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 3px 0 rgba(255, 255, 255, 0.3),
      inset 0 -2px 2px 0 #00A1DE,
      inset 0 0 0 3px #79D5F8;
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    margin-top: -12px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-image: radial-gradient(50% 50%, #FFFFFF 50%, #FFFFFF 73%, #F8F8F8 81%, #EBEBEB 90%, #DDDDDD 95%);
    transition: transform 0.3s ease, width 0.2s ease, height 0.2s ease;
    box-shadow:
      1px 1px 4px 0 rgba(0, 0, 0, 0.25),
      inset 0 1px 3px 0 rgba(255, 255, 255, 0.3),
      inset 0 -2px 2px 0 #00A1DE,
      inset 0 0 0 3px #79D5F8;
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

InputRange.displayName = 'InputRange';

export default InputRange;

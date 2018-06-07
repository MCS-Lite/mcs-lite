// @flow
import * as React from 'react';

export type Value = number | string;
export type ItemProps = {
  value: Value,
  children: React.Node,
};

export type ItemValueMapper = ItemProps => string;

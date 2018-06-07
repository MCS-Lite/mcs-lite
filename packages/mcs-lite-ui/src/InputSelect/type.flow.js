// @flow
export type Value = number | string;
export type ItemProps = {
  value: Value,
  children: string | React.Element,
};

export type ItemValueMapper = ItemProps => string | number;

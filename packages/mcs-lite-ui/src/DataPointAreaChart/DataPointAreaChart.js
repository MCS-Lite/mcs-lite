import React, { PropTypes } from 'react';
import R from 'ramda';
import { opacity } from 'mcs-lite-theme';
import { withTheme } from 'styled-components';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import RechartTooltip from './RechartTooltip';

const lighten = opacity(0.4);

const DataPointAreaChart = ({
  data, theme, kind, type, isAnimationActive,
  XAxisProps, tooltipProps,
}) =>
  <ResponsiveContainer>
    <AreaChart data={data} margin={{ left: -20 }}>
      <defs>
        <linearGradient id="areaGradient" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor={theme.color[kind]} stopOpacity="0.5" />
          <stop offset="1" stopColor={lighten(theme.color[kind])} stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <XAxis
        dataKey="updatedAt"
        tick={{ fill: theme.color.grayBase }}
        height={24}
        tickLine={false}
        tickSize={12}
        axisLine={{ stroke: theme.color.grayBase }}
        interval="preserveStartEnd"
        {...XAxisProps}
      />
      <YAxis
        tickLine={false}
        tick={{ fill: theme.color.grayBase }}
        axisLine={{ stroke: theme.color.grayBase }}
      />
      <CartesianGrid
        strokeDasharray="3 3"
        vertical={false}
      />
      <Tooltip
        content={<RechartTooltip />}
        cursor={{ stroke: theme.color.warning, strokeDasharray: '4, 2' }}
        {...tooltipProps}
      />
      <Area
        type={type}
        dataKey="value"
        isAnimationActive={isAnimationActive}
        stroke={theme.color[kind]}
        fill="url(#areaGradient)"
      />
    </AreaChart>
  </ResponsiveContainer>;

DataPointAreaChart.displayName = 'DataPointAreaChart';
DataPointAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.number.isRequired,
  })).isRequired,
  theme: PropTypes.object.isRequired,
  kind: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isAnimationActive: PropTypes.bool,
  XAxisProps: PropTypes.shape({
    tickFormatter: PropTypes.func,
  }),
  tooltipProps: PropTypes.shape({
    formatter: PropTypes.func,
    labelFormatter: PropTypes.func,
  }),
};
DataPointAreaChart.defaultProps = {
  kind: 'primary',
  type: 'linear',
  isAnimationActive: false,
  XAxisProps: {
    tickFormatter: R.identity,
  },
  tooltipProps: {
    formatter: value => `datapoint: ${value}`,
    labelFormatter: value => `time: ${value}`,
  },
};

export default withTheme(DataPointAreaChart);

const DATA_CHANNELS = [
  {
    id: 'Integer Control id',
    type: 'Integer_Control',
    values: { value: 50 },
    format: {
      unit: 'ampere',
    },
  },
  {
    id: 'Switch Control id',
    type: 'Switch_Control',
    values: { value: 50 },
    format: {},
  },
  {
    id: 'Category Control id',
    type: 'Category_Control',
    values: { value: 'v2' },
    format: {
      items: [
        { name: 'k1', value: 'v1' },
        { name: 'k2', value: 'v2' },
      ],
    },
  },
  {
    id: 'Category Display',
    type: 'Category_Display',
    values: { value: 'v2' },
    format: {
      items: [
        { name: 'k1', value: 'v1' },
        { name: 'k2', value: 'v2' },
        { name: 'k3', value: 'v3' },
        { name: 'k4', value: 'v4' },
        { name: 'k5', value: 'v5' },
      ],
    },
  },
  {
    id: 'Switch Display',
    type: 'Switch_Display',
    values: { value: 0 },
    format: {},
  },
  {
    id: 'PWM Display',
    type: 'PWM_Display',
    values: { value: 'value pwm', period: 20 },
    format: {},
  },
  {
    id: 'PWM Control',
    type: 'PWM_Control',
    values: { value: 1, period: 20 },
    format: {
      lowerbound: 1,
      upperbound: 100,
    },
  },
];
export default DATA_CHANNELS;

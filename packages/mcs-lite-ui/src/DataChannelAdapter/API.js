const DATA_CHANNELS = [
  {
    id: 'Integer Control id',
    type: 'INTEGER_CONTROL',
    values: { value: 0 },
    format: {
      unit: 'ampere',
    },
  },
  {
    id: 'Integer Display id',
    type: 'INTEGER_DISPLAY',
    values: { value: 0 },
    format: {
      unit: 'ampere',
    },
  },
  {
    id: 'Float Control id',
    type: 'FLOAT_CONTROL',
    values: {},
    format: {
      unit: 'ampere',
    },
  },
  {
    id: 'Float Display id',
    type: 'FLOAT_DISPLAY',
    values: {},
    format: {
      unit: 'ampere',
    },
  },
  {
    id: 'String Control id',
    type: 'STRING_CONTROL',
    values: { value: 'Any string type value.' },
    format: {},
  },
  {
    id: 'String Display id',
    type: 'STRING_DISPLAY',
    values: { value: 'Any string type value.' },
    format: {},
  },
  {
    id: 'Hex Control id',
    type: 'HEX_CONTROL',
    values: { value: 'ABF123' },
    format: {},
  },
  {
    id: 'Hex Display id',
    type: 'HEX_DISPLAY',
    values: { value: 'ABF123' },
    format: {},
  },
  {
    id: 'Switch Control id',
    type: 'SWITCH_CONTROL',
    values: { value: 1 },
    format: {},
  },
  {
    id: 'Switch Display',
    type: 'SWITCH_DISPLAY',
    values: { value: 0 },
    format: {},
  },
  {
    id: 'Category Control id',
    type: 'CATEGORY_CONTROL',
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
    type: 'CATEGORY_DISPLAY',
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
    id: 'GPIO Control id',
    type: 'GPIO_CONTROL',
    values: { value: 1 },
    format: {},
  },
  {
    id: 'GPIO Display id',
    type: 'GPIO_DISPLAY',
    values: { value: 0 },
    format: {},
  },
  {
    id: 'Analog Control id',
    type: 'ANALOG_CONTROL',
    values: { value: 23 },
    format: {
      lowerbound: 1,
      upperbound: 100,
    },
  },
  {
    id: 'PWM Display',
    type: 'PWM_DISPLAY',
    values: { value: 'value pwm', period: 20 },
    format: {},
  },
  {
    id: 'PWM Control',
    type: 'PWM_CONTROL',
    values: { value: 0, period: 0 },
    format: {
      lowerbound: 0,
      upperbound: 100,
    },
  },
];
export default DATA_CHANNELS;

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
    id: 'Integer Display id',
    type: 'Integer_Display',
    values: { value: 50 },
    format: {
      unit: 'ampere',
    },
  },
  {
    id: 'Float Control id',
    type: 'Float_Control',
    values: { value: 50.1235 },
    format: {
      unit: 'ampere',
    },
  },
  {
    id: 'Float Display id',
    type: 'Float_Display',
    values: { value: 50.55252 },
    format: {
      unit: 'ampere',
    },
  },
  {
    id: 'String Control id',
    type: 'String_Control',
    values: { value: 'Any string type value.' },
    format: {},
  },
  {
    id: 'String Display id',
    type: 'String_Display',
    values: { value: 'Any string type value.' },
    format: {},
  },
  {
    id: 'Hex Control id',
    type: 'Hex_Control',
    values: { value: 'ABF123' },
    format: {},
  },
  {
    id: 'Hex Display id',
    type: 'Hex_Display',
    values: { value: 'ABF123' },
    format: {},
  },
  {
    id: 'Switch Control id',
    type: 'Switch_Control',
    values: { value: 1 },
    format: {},
  },
  {
    id: 'Switch Display',
    type: 'Switch_Display',
    values: { value: 0 },
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
    id: 'GPIO Control id',
    type: 'GPIO_Control',
    values: { value: 1 },
    format: {},
  },
  {
    id: 'GPIO Display id',
    type: 'GPIO_Display',
    values: { value: 0 },
    format: {},
  },
  {
    id: 'Analog Control id',
    type: 'Analog_Control',
    values: { value: 23 },
    format: {
      lowerbound: 1,
      upperbound: 100,
    },
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

import { createStack, parse, base, auth } from 'http-client';

export const API_URL = '/api';

const bearer = accessToken =>
  createStack(
    base(API_URL),
    auth(`Bearer ${accessToken}`),
    parse('json', 'jsonData'),
  );

export default bearer;

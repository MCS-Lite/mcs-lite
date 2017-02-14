import { createStack, parse, method, base, auth } from 'http-client';

export const API_URL = '/api';

const bearer = accessToken =>
  createStack(
    method('GET'),
    base(API_URL),
    auth(`Bearer ${accessToken}`),
    parse('json', 'jsonData'),
  );

export default bearer;

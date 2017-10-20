import checkUserAvailableAPI from '../checkUserAvailableAPI';

it('should return true when fetch with true response', async () => {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => true }));

  const res = await checkUserAvailableAPI({
    accessToken: 'accessToken1',
    email: 'email1',
  });
  expect(global.fetch).toBeCalledWith('/api/users/available?email=email1', {
    headers: {
      Authorization: 'Bearer accessToken1',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  expect(res).toBe(true);
});

it('should return true when fetch with false response', async () => {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => false }));

  const res = await checkUserAvailableAPI({
    accessToken: 'accessToken2',
    email: 'email2',
  });
  expect(global.fetch).toBeCalledWith('/api/users/available?email=email2', {
    headers: {
      Authorization: 'Bearer accessToken2',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  expect(res).toBe(false);
});

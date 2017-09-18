import checkUserAvalableAPI from '../checkUserAvalableAPI';

it('should return true when fetch with empty list', async () => {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => [] }));

  const res = await checkUserAvalableAPI({
    accessToken: 'accessToken1',
    email: 'email1',
  });
  expect(global.fetch).toBeCalledWith('/api/users?email=email1', {
    headers: {
      Authorization: 'Bearer accessToken1',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  expect(res).toBe(true);
});

it('should return true when fetch with non-empty list', async () => {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => [1] }));

  const res = await checkUserAvalableAPI({
    accessToken: 'accessToken2',
    email: 'email2',
  });
  expect(global.fetch).toBeCalledWith('/api/users?email=email2', {
    headers: {
      Authorization: 'Bearer accessToken2',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  expect(res).toBe(false);
});

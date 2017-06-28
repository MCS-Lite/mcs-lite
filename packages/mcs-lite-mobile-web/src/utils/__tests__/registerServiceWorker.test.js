import registerServiceWorker, { unregister } from '../registerServiceWorker';

it('should return registerServiceWorker function', () => {
  expect(typeof registerServiceWorker).toBe('function');
});

it('should return unregister function', () => {
  expect(typeof unregister).toBe('function');
});

it('should invoke registerServiceWorker without errors', async () => {
  try {
    await registerServiceWorker();
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});

it('should invoke unregister without errors', async () => {
  try {
    await unregister();
  } catch (e) {
    expect(e).toBeUndefined();
  }

  expect(true).toBeTruthy();
});

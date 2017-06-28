import cookie from 'react-cookie';

/**
 * Never access cookie something like below or you will get old cookie object.
 *
 * [X] .mapTo(cookie.load('token'));
 * [O] .map(() => cookie.load('token'));
 *
 * @author Michael Hsu
 */

const getCookieToken = () => cookie.load('token');
const removeCookieToken = () => cookie.remove('token', { path: '/' });

export default {
  getCookieToken,
  removeCookieToken,
};

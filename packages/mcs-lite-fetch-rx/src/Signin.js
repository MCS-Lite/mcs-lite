/**
 * You should use
 *
 * import { Signin as SIGNIN_URL } from 'mcs-lite-fetch-rx';
 *
 * <Form method="post" action={SIGNIN_URL}>
 *
 */

import { API_HOSTNAME } from './stacks/proxy';

const URL = `${API_HOSTNAME}/oauth/login/mobile`;

export default URL;

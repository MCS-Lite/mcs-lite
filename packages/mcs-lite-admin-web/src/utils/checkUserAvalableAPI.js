/* global fetch */

import * as R from 'ramda';

const checkUserAvalableAPI = ({ accessToken, email }) =>
  fetch(`/api/users?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(R.isEmpty);

export default checkUserAvalableAPI;

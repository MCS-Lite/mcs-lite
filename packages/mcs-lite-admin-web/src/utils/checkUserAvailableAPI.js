/* global fetch */

const checkUserAvailableAPI = ({ accessToken, email }) =>
  fetch(`/api/users/available?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }).then(response => response.json());

export default checkUserAvailableAPI;

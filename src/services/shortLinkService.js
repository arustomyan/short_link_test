const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.text().then((e) => {
    throw new Error(JSON.parse(e).detail);
  });
};

class ShortLinkService {
  constructor({ address }) {
    this.address = address;
  }

  createShortLink(link, token) {
    return fetch(`${this.address}/squeeze`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then((res) => handleResponse(res));
  }

  register({ username, password }) {
    return fetch(
      `${this.address}/register?username=${username}&password=${password}`,
      {
        method: 'POST',
      }
    ).then((res) => handleResponse(res));
  }

  login({ username, password }) {
    const body = new URLSearchParams();
    body.append('username', username);
    body.append('password', password);

    return fetch(`${this.address}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    }).then((response) => handleResponse(response));
  }
}

const ShortLinkApi = new ShortLinkService({
  address: 'http://79.143.31.216',
});

export default ShortLinkApi;

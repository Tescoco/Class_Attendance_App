export const signin = (userDetails: object) => {
  return fetch(`https://rapid-sand-valley.herokuapp.com/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch();
};

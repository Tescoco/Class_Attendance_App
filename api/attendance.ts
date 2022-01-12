interface Props {
  token: any;
  week: number;
}

export const getAttendance = ({ token, week }: Props) => {
  return fetch(`https://rapid-sand-valley.herokuapp.com/attendance/mobile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ week }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch();
};

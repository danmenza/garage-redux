export function fetchCars(garage) {
  return fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'FETCH_CARS',
        payload: data
      };
    });
}

export function createCar(body, garage, callback) {
  const data = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(callback);

  return {
    type: 'CREATE_CAR',
    payload: data
  };
}

export function removeCar(history, car) {
  const data = fetch(`https://wagon-garage-api.herokuapp.com/cars${car.id}`, {
    method: 'DELETE',
  }).then(r => r.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_CAR',
    payload: data
  }; 
}

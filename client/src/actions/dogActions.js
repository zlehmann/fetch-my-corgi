export function fetchDogs() {
  return (dispatch) => {
    dispatch({type: 'LOADING_DOGS'});
    return fetch("/api/dogs")
    .then(response => response.json())
    .then(responseJSON => {
       dispatch({type: "FETCH_DOGS", payload: responseJSON})
    })
  }
}

export function fetchDog(dogs, id) {
  return (dispatch) => {
    dispatch(
      {
        type: "FETCH_DOG",
        payload: dogs.dogs.find((dog) => dog.id === id)
      }
    );
  }
}

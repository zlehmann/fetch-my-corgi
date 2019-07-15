export function fetchShelters() {
  return (dispatch) => {
    dispatch({type: 'LOADING_SHELTERS'});
    return fetch("/api/shelters")
    .then(response => response.json())
    .then(responseJSON => {
       dispatch({type: "FETCH_SHELTERS", payload: responseJSON})
    })
  }
}

export function fetchShelter(shelters, id) {
  return (dispatch) => {
    dispatch(
      {
        type: "FETCH_SHELTER",
        payload: shelters.shelters.find((shelter) => shelter.id === id)
      }
    );
  }
}

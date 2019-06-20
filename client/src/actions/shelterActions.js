export default function fetchShelters() {
  return (dispatch) => {
    dispatch({type: 'LOADING_SHELTERS'});
    return fetch("/api/shelters")
    .then(response => response.json())
    .then(responseJSON => {
       dispatch({type: "FETCH_SHELTERS", payload: responseJSON})
    })
  }
}

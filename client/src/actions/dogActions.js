export default function fetchDogs() {
  return (dispatch) => {
    dispatch({type: 'LOADING_DOGS'});
    return fetch("/api/dogs")
    .then(response => response.json())
    .then(responseJSON => {
       dispatch({type: "FETCH_DOGS", payload: responseJSON})
    })
  }
}

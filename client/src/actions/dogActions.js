export default function fetchDogs() {
  return (dispatch) => {
    dispatch({type: 'LOADING_DOGS'});
    return fetch('http://localhost:3001/api/dogs')
    .then(response => response.json())
    .then(responseJSON => {
      dispatch({type: "FETCH_DOGS", payload: responseJSON})
    })
  }
}

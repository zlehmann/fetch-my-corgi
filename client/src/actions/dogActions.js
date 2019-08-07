export function updateBackend() {
  console.log('hit updateBackend')
  return (dispatch) => {
    dispatch({type: 'LOADING_DOGS'});
    return fetch("/api/dogs/update_backend")
    .then(response => {dispatch({type: "UPDATE_BACKEND"})
    })
  }
}

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

export function toggleFav(dogs, id) {
  const dog = dogs.dogs.find((dog) => dog.id === id)
  if (dog.fav === true) {
    dog.fav = false;
  } else {
    dog.fav = true;
  }
  return (dispatch) => {
    dispatch({type: 'LOADING_DOGS'});
    return fetch(`/api/dogs/${dog.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'skip_before_action': 'verify_authenticity_token'
      },
      body: JSON.stringify(dog)
    })
    .then(response => response.json())
    .then(responseJSON => {
      dispatch({type: "TOGGLE_FAV", payload: responseJSON})
    })
  }
}

export function fetchFavorites(dogs) {
  return (dispatch) => {
      dispatch({type: 'FETCH_FAVORITES',
      payload: dogs.dogs.filter(dog => {return dog.fav === true})
    })
  }
}

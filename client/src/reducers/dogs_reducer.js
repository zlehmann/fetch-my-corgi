export default function dogsReducer(
  state = {
    loading: false,
    dogs: [],
    currentDog: {'name': "placeholder", 'imageURL': "", 'fav': false}
  },
  action) {
  switch (action.type) {
    case "LOADING_DOGS":
      return {
        ...state,
        loading: true
      }

    case "FETCH_DOGS":
      return {
        ...state,
        loading: false,
        dogs: action.payload
      }

    case "FETCH_DOG":
      return {
        ...state,
        loading: false,
        currentDog: action.payload
      }

    case "TOGGLE_FAV":
      return {
        ...state,
        currentDog: action.payload
      }

    default:
      return state
  }
}

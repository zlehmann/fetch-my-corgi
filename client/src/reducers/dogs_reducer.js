export default function dogsReducer(state = { loading: false, dogs: [] }, action) {
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

    default:
      return state
  }
}

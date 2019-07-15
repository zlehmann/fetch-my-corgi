export default function dogsReducer(state = { loading: false, dogs: [], currentDog: {'name': "placeholder", 'imageURL': "test.com"} }, action) {
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

    default:
      return state
  }
}

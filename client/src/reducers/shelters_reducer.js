export default function sheltersReducer(state = { loading: false, shelters: [], currentShelter: {'name': 'Placeholder', 'address': '5th Ave', 'city': 'New York, NY'} }, action) {
  switch (action.type) {
    case "LOADING_SHELTERS":
      return {
        ...state,
        loading: true
      }

    case "FETCH_SHELTERS":
      return {
        ...state,
        loading: false,
        shelters: action.payload
      }

    case "FETCH_SHELTER":
      return {
        ...state,
        loading: false,
        currentShelter: action.payload
      }

    default:
      return state
  }
}

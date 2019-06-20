export default function sheltersReducer(state = { loading: false, dogs: [], shelters: [] }, action) {
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

    default:
      return state
  }
}

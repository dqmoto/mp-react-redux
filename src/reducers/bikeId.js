//Stock Reducer
const bikeIdReducerDefaultState = {
    id:''
}
export default (state = bikeIdReducerDefaultState, action ) => {
    switch(action.type) {
    case 'SET_BIKE_ID':
                console.log('from the reducer', action.id)
                return {
                    ...state,
                    id: action.id
                }
    default:
        return state;
    }
}
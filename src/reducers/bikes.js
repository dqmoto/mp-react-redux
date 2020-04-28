//Bikes Reducer
const bikesReducerDefaultState = []
export default (state = bikesReducerDefaultState, action ) => {
    switch(action.type) {
        case 'ADD_BIKE':
            console.log(action.bike.id);
            return [
                ...state, 
                action.bike
            ];
        case 'ADD_PROJECT':
            return state.map((bike)=>{
                //const updates = action.updates
                if (bike.id === action.id) {
                   // console.log('action id ', action.id)
                    return {
                        ...bike,
                        ...action.updates
                    }
                } else {
                    return bike;
                }
            })
        case 'EDIT_PROJECT':
                return state.map((bike)=>{
                    if (bike.id === action.bikeId) {
                        console.log('action id ', action.bikeId)
                        console.log('action id ', action.id)
                        console.log('action updates', action.updates)
                        return {
                            ...bike,
                            ...action.updates
                        }
                    } else {
                        return bike;
                    }
                })
            
        case 'REMOVE_BIKE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_BIKE':
            return state.map((bike)=>{
                if (bike.id === action.id) {
                    return {
                        ...bike,
                        ...action.updates
                    }
                } else {
                    return bike;
                }
            })
        case 'SET_BIKES':
                return action.bikes;

        default:
            return state;
    }
};